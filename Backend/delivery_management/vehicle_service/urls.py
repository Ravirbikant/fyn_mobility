from django.urls import path
from . import views

urlpatterns = [
    path('add-component/', views.add_component, name='add_component'),
    path('add-vehicle/', views.add_vehicle, name='add_vehicle'),
    path('add-issue/', views.add_issue, name='add_issue'),
    path('calculate-price/<int:vehicle_id>/', views.calculate_price, name='calculate_price'),
    path('revenue-graphs/', views.revenue_graphs, name='revenue_graphs'),
    path('components/', views.get_components, name='get_components'),
    path('vehicles/', views.get_vehicles, name='get_vehicles'),
]
