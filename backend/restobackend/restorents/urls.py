from django.urls import path
from restorents import views
urlpatterns = [
    path('restos',views.restos)
]