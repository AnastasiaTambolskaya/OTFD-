from django.urls import path
from . import views
urlpatterns = [
    path('index/', views.index, name='index'),
    path('account_activation_sent/', views.account_activation_sent, name='account_activation_sent'),
    path('login/', views.login, name='login'),
    path('glav/', views.glavnaya, name='glav'),
    path('', views.signup, name='signup'),
    path('base/', views.base, name='base'),
    path('test/', views.test, name='test'),
    path('activate/<uidb64>/<token>/', views.activate, name='activate'),
    path('account_activation_complete/', views.account_activation_complete, name='account_activation_complete'),
    path('account/', views.account, name='account'),
    path('soder/', views.soder, name='soder'),
    path('login/', views.login, name='login'),
]