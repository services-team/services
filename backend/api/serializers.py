from rest_framework import serializers
from .models import Service


class ServiceSerializer(serializers.ModelSerializer):
    '''Serializeris'''
    class Meta:
        model = Service
        fields = ('title', 'description', 'price_From', 'price_To')
        #fields = '__all__'
