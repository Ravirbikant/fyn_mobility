from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Component, Vehicle, Issue
from decimal import Decimal

# Corrected add_component view with csrf_exempt for function-based views
@csrf_exempt
def add_component(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        print(data)
        
        Component.objects.create(
            name=data['name'],
            repair_price=Decimal(data['repair_price']),
            purchase_price=Decimal(data['purchase_price'])
        )
        return JsonResponse({'message': 'Component added successfully'}, status=201)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def add_vehicle(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        Vehicle.objects.create(name=data['name'])
        return JsonResponse({'message': 'Vehicle added successfully'}, status=201)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def add_issue(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        vehicle = Vehicle.objects.get(id=data['vehicle_id'])
        component = Component.objects.get(id=data['component_id'])
        Issue.objects.create(
            vehicle=vehicle,
            component=component,
            is_new=data['is_new'],
            quantity=data['quantity']
        )
        return JsonResponse({'message': 'Issue added successfully'}, status=201)
    return JsonResponse({'error': 'Invalid request method'}, status=400)

def calculate_price(request, vehicle_id):
    if request.method == 'GET':
        issues = Issue.objects.filter(vehicle_id=vehicle_id)
        total_price = sum(issue.calculate_price() for issue in issues)
        return JsonResponse({'total_price': total_price})
    return JsonResponse({'error': 'Invalid request method'}, status=400)

def revenue_graphs(request):
    revenue = {
        'daily': 0,
        'monthly': 0,
        'yearly': 0,
    }
    return JsonResponse(revenue)

def get_components(request):
    components = Component.objects.all()
    data = [{"id": component.id, "name": component.name} for component in components]
    return JsonResponse(data, safe=False)

def get_vehicles(request):
    vehicles = Vehicle.objects.all()
    data = [{"id": vehicle.id, "name": vehicle.name} for vehicle in vehicles]
    return JsonResponse(data, safe=False)
