# Generated by Django 5.0.7 on 2024-08-12 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_testimonial_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testimonial',
            name='author',
            field=models.CharField(max_length=50),
        ),
    ]
