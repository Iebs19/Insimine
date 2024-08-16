from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, ContentBlockViewSet,  TechStackViewSet, ClientViewSet, FormDataViewSet,CaseStudyViewSet, WhitePaperViewSet, ServiceViewSet, TestimonialViewSet

router = DefaultRouter()
router.register(r'blog', BlogViewSet)
router.register(r'case-study', CaseStudyViewSet)
router.register(r'techstack', TechStackViewSet)
router.register(r'service', ServiceViewSet)
router.register(r'client', ClientViewSet)
router.register(r'testinomial', TestimonialViewSet)
router.register(r'form-submit', FormDataViewSet)
router.register(r'white-paper', WhitePaperViewSet)
router.register(r'content-block', ContentBlockViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
