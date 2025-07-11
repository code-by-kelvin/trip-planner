from django.contrib import admin
from .models import Trip

@admin.register(Trip)
class TripAdmin(admin.ModelAdmin):
    list_display = ("pickup_location", "dropoff_location", "cycle_used", "created_at")
    search_fields = ("pickup_location", "dropoff_location")
    list_filter = ("created_at",)
