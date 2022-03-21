# Generated by Django 3.2.12 on 2022-03-21 14:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('unlock', '0001_initial'),
        ('dra_inn_manglende_ord', '0001_initial'),
        ('sets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sets',
            name='DraInnManglendeOrd1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='DraInnManglendeOrd1', to='dra_inn_manglende_ord.drainnmanglendeord'),
        ),
        migrations.AddField(
            model_name='sets',
            name='DraInnManglendeOrd2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='DraInnManglendeOrd2', to='dra_inn_manglende_ord.drainnmanglendeord'),
        ),
        migrations.AddField(
            model_name='sets',
            name='DraInnManglendeOrd3',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='DraInnManglendeOrd3', to='dra_inn_manglende_ord.drainnmanglendeord'),
        ),
        migrations.AddField(
            model_name='sets',
            name='DraInnManglendeOrd4',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='DraInnManglendeOrd4', to='dra_inn_manglende_ord.drainnmanglendeord'),
        ),
        migrations.AddField(
            model_name='sets',
            name='DraInnManglendeOrd5',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='DraInnManglendeOrd5', to='dra_inn_manglende_ord.drainnmanglendeord'),
        ),
        migrations.AddField(
            model_name='sets',
            name='LåsOppMobil1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='LåsOppMobil1', to='unlock.låsoppmobil'),
        ),
        migrations.AddField(
            model_name='sets',
            name='LåsOppMobil2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='LåsOppMobil2', to='unlock.låsoppmobil'),
        ),
        migrations.AddField(
            model_name='sets',
            name='LåsOppMobil3',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='LåsOppMobil3', to='unlock.låsoppmobil'),
        ),
        migrations.AddField(
            model_name='sets',
            name='LåsOppMobil4',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='LåsOppMobil4', to='unlock.låsoppmobil'),
        ),
        migrations.AddField(
            model_name='sets',
            name='LåsOppMobil5',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='LåsOppMobil5', to='unlock.låsoppmobil'),
        ),
    ]
