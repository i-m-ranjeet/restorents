from django.db import models
from django.forms import CharField, IntegerField

class restorent(models.Model):
    name =models.CharField(max_length=50)
    cuisines = models.CharField(max_length=20)
    averagecostoftwo = models.IntegerField()
    currency = models.IntegerField()
    hastablebooking = models.BooleanField(default=False)
    hasonlinedelivery = models.BooleanField()
    aggregaterating = models.IntegerField()
    ratingcolor = models.CharField(max_length=20)
    ratingtext = models.CharField(max_length=20)
    votes = models.IntegerField()
    
