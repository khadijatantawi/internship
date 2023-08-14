# Generated by Django 4.2.4 on 2023-08-13 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee_register', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100, unique=True)),
                ('speed', models.CharField(max_length=100)),
                ('pop_name', models.CharField(max_length=100)),
                ('dslam_hostname', models.CharField(max_length=100)),
                ('frame', models.CharField(max_length=100)),
                ('attainable_speed', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Employee',
        ),
    ]
