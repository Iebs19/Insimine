# Generated by Django 5.0.7 on 2024-08-06 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_service_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='techstack',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='tech_images/'),
        ),
    ]