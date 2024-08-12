from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, ContentBlockListCreateView, ContentBlockDetailView,  TechStackViewSet, ClientViewSet, FormDataCreateView,CaseStudyViewSet, WhitePaperListCreateView, WhitePaperDetailView, ServiceViewSet, TestimonialViewSet

router = DefaultRouter()
router.register(r'blog', BlogViewSet)
router.register(r'case-study', CaseStudyViewSet)
router.register(r'techstack', TechStackViewSet)
router.register(r'service', ServiceViewSet)
router.register(r'client', ClientViewSet)
router.register(r'testinomial', TestimonialViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('content-blocks/', ContentBlockListCreateView.as_view(), name='contentblock-list-create'),
    path('content-blocks/<int:pk>/', ContentBlockDetailView.as_view(), name='contentblock-detail'),
    path('form-submit/', FormDataCreateView.as_view(), name='form-submit'),
    path('whitepapers/', WhitePaperListCreateView.as_view(), name='whitepaper-list-create'),
    path('whitepapers/<int:pk>/', WhitePaperDetailView.as_view(), name='whitepaper-detail'),
]
