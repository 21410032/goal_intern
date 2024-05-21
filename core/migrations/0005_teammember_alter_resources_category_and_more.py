# Generated by Django 5.0.6 on 2024-05-21 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_resources_link'),
    ]

    operations = [
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('category', models.CharField(choices=[('collaborator', 'Collaborator'), ('research_associate', 'Research_Associate'), ('community_trainer', 'Community_Trainer'), ('intern', 'Intern'), ('student', 'Students')], max_length=30)),
                ('position', models.CharField(max_length=40)),
                ('organisation', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('contact', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='images/team_member/')),
            ],
        ),
        migrations.AlterField(
            model_name='resources',
            name='category',
            field=models.CharField(choices=[('publication', 'Publication'), ('training_manual', 'Training_Manual')], default='publication', max_length=30),
        ),
        migrations.AlterField(
            model_name='resources',
            name='image',
            field=models.ImageField(upload_to='images/resource/'),
        ),
    ]