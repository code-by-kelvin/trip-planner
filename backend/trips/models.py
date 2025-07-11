from django.db import models

class Trip(models.Model):
    current_location = models.CharField(max_length=255)
    pickup_location = models.CharField(max_length=255)
    dropoff_location = models.CharField(max_length=255)
    cycle_used = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    route_data = models.JSONField()
    log_data = models.JSONField()

    def __str__(self):
        return f"Trip from {self.pickup_location} to {self.dropoff_location}"
