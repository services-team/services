'''Does things'''
# api/resources.py

from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from api.models import Service

class ServiceResource(ModelResource):
    """Does things"""
    class Meta:
        """Does some things"""
        queryset = Service.objects.all()
        resources_name = 'service'
        filtering = { 'title', 'contains'}
        authorization = Authorization()
    
    
