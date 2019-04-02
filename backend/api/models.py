'''Paslaugos modelis'''
from django.db import models

# api/models.py
class Service(models.Model):
    """Paslaugos modelis/klase"""
    #custom_place = models.TextField()
    title = models.CharField(max_length=100, default='Kirpejas')
    description = models.TextField()
    #default_place = models.CharField(max_length=50)
    #availability = models.BooleanField(default=False)
    price_From = models.DecimalField(decimal_places=2, max_digits=6)
    price_To = models.DecimalField(decimal_places=2, max_digits=6)
    #default_place = models.TextField()
    #qualification = models.Te
    city = models.TextField()
    class Meta:
        db_table = "service"


def __str__(self):
    return '%s %s %s %s %s %s' % \
         (self.title, self.description, self.custom_place, self.price_From, self.price_To, self.default_place)

