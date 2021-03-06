from django.conf.urls import url
from . import views

urlpatterns = [
    # url(r'^new/', views.new, name="new"),
    # url(r'^create/', views.create, name="create"),
    # url(r'^(?P<userid>\d+)/edit/', views.edit, name="edit"),
    # url(r'^(?P<userid>\d+)/show/', views.show, name="show"),
    # url(r'^(?P<userid>\d+)/update/', views.update, name="update"),
    # url(r'^(?P<userid>\d+)/destroy/', views.destroy, name="destroy"),
    url(r'^post_message/$', views.post_message, name="post_message"),
    url(r'^post_comment/$', views.post_comment, name="post_comment"),
    url(r'^$', views.index, name="index"),
]