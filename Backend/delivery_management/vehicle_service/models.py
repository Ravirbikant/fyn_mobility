from django.db import models


# Create your models here.
class Component(models.Model):
    name = models.CharField(max_length=100)
    repair_price = models.DecimalField(max_digits=10, decimal_places=2)
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    
class Vehicle(models.Model):
    name = models.CharField(max_length=100)
    added_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Issue(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    component = models.ForeignKey(Component, on_delete=models.CASCADE)
    is_new = models.BooleanField()  # True for new purchase, False for repair
    quantity = models.IntegerField()

    def calculate_price(self):
        return self.component.purchase_price * self.quantity if self.is_new else self.component.repair_price * self.quantity

    def __str__(self):
        return f"Issue for {self.vehicle.name}"