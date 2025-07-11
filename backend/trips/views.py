from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime, timedelta
import requests

class PlanTripView(APIView):
    def post(self, request):
        try:
            data = request.data
            pickup = data.get("pickupLocation")
            dropoff = data.get("dropoffLocation")
            cycle_used = int(data.get("cycleUsed", 8))
            start_date = data.get("startDate")  # e.g. "2025-07-12"
            start_time = data.get("startTime")  # e.g. "06:00"

            def geocode_location(place):
                url = "https://nominatim.openstreetmap.org/search"
                params = {
                    "q": place,
                    "format": "json",
                    "limit": 1
                }
                headers = {"User-Agent": "trip-planner"}
                response = requests.get(url, params=params, headers=headers)
                result = response.json()
                if result:
                    return {
                        "lat": float(result[0]["lat"]),
                        "lng": float(result[0]["lon"])
                    }
                return None

            pickup_coords = geocode_location(pickup)
            dropoff_coords = geocode_location(dropoff)

            if not pickup_coords or not dropoff_coords:
                return Response({"message": "Could not geocode locations."}, status=400)

            route = [pickup_coords, dropoff_coords]

            # Build logs based on start date/time
            start_datetime = datetime.strptime(f"{start_date} {start_time}", "%Y-%m-%d %H:%M")

            logs = []
            total_driven = 0
            drive_block = 4  # hours of driving before break
            break_duration = 1  # 1 hour break

            while total_driven < cycle_used:
                # Driving block
                drive_start = start_datetime
                drive_end = drive_start + timedelta(hours=drive_block)
                logs.append({
                    "type": "Driving",
                    "start": drive_start.strftime("%H:%M"),
                    "end": drive_end.strftime("%H:%M")
                })
                total_driven += drive_block
                start_datetime = drive_end

                if total_driven < cycle_used:
                    # Break block
                    break_end = start_datetime + timedelta(hours=break_duration)
                    logs.append({
                        "type": "Break",
                        "start": start_datetime.strftime("%H:%M"),
                        "end": break_end.strftime("%H:%M")
                    })
                    start_datetime = break_end

            daily_logs = [{
                "date": start_date,
                "log": logs
            }]

            return Response({
                "route": route,
                "daily_logs": daily_logs
            }, status=200)

        except Exception as e:
            return Response({"message": "Server error", "error": str(e)}, status=500)
