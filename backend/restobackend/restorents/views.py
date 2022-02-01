from django.http import JsonResponse
from django.shortcuts import render
from restorents import models
def restos(request):
    if request.method == "GET":
        get_restos = models.restorent.objects.all()
        resto_data = []
        for resto in get_restos:
            resto_data.append({
                "id":resto.id,
                "name":resto.name,
                "cuisines":resto.cuisines,
                "averagecostoftwo":resto.averagecostoftwo,
                "currency":resto.currency,
                "hastablebooking":resto.hastablebooking,
                "hasonlinedelivery":resto.hasonlinedelivery,
                "aggregaterating":resto.aggregaterating,
                "ratingcolor":resto.ratingcolor,
                "ratingtext":resto.ratingtext,
                "votes":resto.votes
            })
        return JsonResponse(data={"data":resto_data})