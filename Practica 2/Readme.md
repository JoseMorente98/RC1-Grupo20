# Redes de Computadoras 1

## __Integrantes__
**201801237**	JOSÉ RAFAEL MORENTE GONZÁLEZ

**201801262**	JUAN JOSÉ RAMOS CAMPOS

**201807228**	GERSON ALEJANDRO BELTETÓN URBINA

**201807266**	LUIS FERNANDO VELÁSQUEZ ZACARÍAS


## Configuración Red Multipunto
### Se exportan clientes de open vpn para realizar la conexion.
![VPN 1 ](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682898/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_10.20.37_PM_ovpnwd.jpg)
![VPN 2 ](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617683178/Redes%20de%20Computadoras/Practica%202/OpenVPN_Connect_5_04_2021_22_25_46_ry3l7d.png)
### Se crean tuneles UDP para realizar la conexión y se configuran puertos cruzados.
![Tunel](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682921/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_10.21.50_PM_olucnj.jpg)
### Configuracion del protocolo de red
![IPV4](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617683270/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_10.27.22_PM_y5ascv.jpg)
### Se prueba la comunicación entre topoligias ubicadas en diferentes nodos de la red multipunto.
![PING1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682898/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_9.52.26_PM_iqtvpq.jpg)
![PING2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682898/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_9.52.43_PM_dpp5f5.jpg)



## __Configuración por dispositivo__

**Topología 1**

***vpc Admin1:***

* ip: 192.168.120.2 
* máscara de subred: 255.255.255.192
* ip gateway: 192.168.120.1

***vpc Admin2:***

* ip: 192.168.120.3
* máscara de subred: 255.255.255.192 
* ip gateway: 192.168.120.1

***virtual Server_Contabilidad:***

* ip: 192.168.120.68
* mascara de subred: 255.255.255.192
* ip gateway: 192.168.120.65

***virtual Server_Ventas:***

* ip: 192.168.120.133
* máscara de subred: 255.255.255.192
* ip gateway: 192.168.120.129

***virtual Server_Informatica:***

* ip: 192.168.120.134
* máscara de subred: 255.255.255.192
* ip gateway: 192.168.120.129

***Switch ESW1:***

* puerto f1/0 configurado en modo acceso y asignado a la vlan 10
* puerto f1/1 y f1/2 configurados como port channel group 1 y en modo troncal.
* puerto f1/5 y f1/6 configurados como port channel group 3 y en modo troncal.
* configurado como cliente vtp.

***Switch ESw2:***

* puerto f1/0 configurado en modo acceso y asignado a la vlan 10
* puerto f1/5 y f1/6 configurados como port channel group 3 y en modo troncal.
* puerto f1/3 y f1/4 configurados como port channel group 2 y en modo troncal.
* configurado como cliente vtp.

***Switch Esw3:***

* puerto f1/1 y f1/2 configurados como port channel group 1 y en modo troncal.
* puerto f1/3 y f1/4 configurados como port channel group 2 y en modo troncal.
* puerto f1/8 configurado en modo troncal
* puerto f1/5 configurado en modo acceso y asignado a la vlan 20
* puerto f1/6 configurado en modo acceso y asignado a la vlan 30
* puerto f1/7 configurado en modo acceso y asignado a la vlan 30
* configurado como cliente vtp


**Topología 2**

***Switch Esw1:***

* puerto f1/1, f1/2 y f1/3 configurados como port channel group 2 y en modo troncal.
* puerto f1/7 y f1/8 configurados como port channel group 1 y en modo troncal.
* puerto f1/4, f1/5 y f1/6 configurados como port channel group 3 y en modo troncal.
* puerto f1/9 configurado en modo troncal.
* creación de vlan 10: ADMINISTRACION.
* creación de vlan 20: CONTABILIDAD.	
* creación de vlan 30: VENTAS-INFORMATICA.
* configurado como servidor vtp.

***Switch Esw2:***

* puertos f1/4, f1/5 y f1/6 configurados como port channel group 4 y en modo troncal.
* puertos f1/7 y f1/8 configurados como port channel group 1 y en modo troncal.
* puertos f1/1, f1/2 y f1/3 configurados como port channel group 5 y en modo troncal.
* configurado como cliente vtp.

***Switch Esw3:***

* puertos f1/1, f1/2 y f1/3 configurados como port channel group 2 y en modo troncal.
* puertos f1/4, f1/5 y f1/6 configurados como port channel group 4 y en modo troncal.
* puerto f1/9 configurado en modo troncal.
* configurado como cliente vtp.

***Switch Esw4:***

* puertos f1/4, f1/5 y f1/6 configurados como port channel group 3 y en modo troncal.
* puertos f1/1, f1/2 y f1/3 configurados como port channel group 5 y en modo troncal.
* configurado como cliente vtp.


**Topología 3**

***virtual server_conta-1:***

* ip: 192.168.120.66 
* máscara de subred: 255.255.255.192
* ip gateway: 192.168.120.65

***vertual server_ventas-1:***

* ip: 192.168.120.130
* máscara de subred 255.255.255.192
* ip gateway 192.168.120.129

***virtual server_info-1:***

* ip: 192.168.120.131
* máscara de subred: 255.255.255.192
* ip gateway: 192.168.120.129

***vpc pc4-ventas:***

* ip: 192.168.120.132
* máscara de subred: 255.255.255.192
* ip gateway: 192.168.120.129

***vpc pc1-conta:***

* ip: 192.168.120.67
* máscara de subred: 255.255.255.192
* ip gateway: 192.168.120.65

***Switch1:***

* puerto e0 configurado en modo acceso y asignado a la vlan 20.
* puerto e1 configurado en modo acceso y asignado a la vlan 30.
* puerto e4 configurado en modo troncal.

***Switch2:***

* puerto e1 configurado en modo acceso y asignado a la vlan 30.
* puerto e0 configurado en modo acceso y asignado a la vlan 30.
* puerto e4 configurado en modo troncal.

***Switch Esw1:***

* puerto f1/4 configurado en modo troncal.
* puertos f1/2 y f1/3 configurados como port channel group 1 y en modo troncal.
* puertos f1/0 y f1/1 configurados como port channel group 3 y en modo troncal.
* configurado como cliente vtp.

***Switch Esw3:*** 

* puerto f1/4 configurado en modo troncal.
* puertos f1/0 y f1/1 configurados como port channel group 4 y en modo troncal.
* puertos f1/2 y f1/3 configurados como port channel group 1 y en modo troncal.
* puertos f1/5 y f1/6 configurados como port channel group 2 y en modo troncal.
* configurado como cliente vtp.

***Switch Esw2:***

* puerto f1/2 configurado en modo troncal.
* puertos f1/0 y f1/1 configurados como port channel group 3 y en modo troncal.
* puertos f1/5 y f1/6 configurados como port channel group 2 y en modo troncal.
* configurado como cliente vtp.

***Switch Esw4:***

* puerto f1/4 configurado en modo acceso y asignado a la vlan 20.
* puertos f1/0 y f1/1 configurados como port channel group 4 y en modo troncal.
* configurado como cliente vtp.

## __Comandos Utilizados__

**Configuracion de chanel ports en Ethernet Switch**

1. (config) interface range fa1/x - y, donde X e Y son el rango de puertos a utilizar, por ejemplo fa1/3 - 5
2. (config) channel group X mode on, donde X es el numero de canal 1,2,3, etc

**Configuracion de enlaces troncales Ethernet Switch**

1. (config) interface poX donde X es el numero de channel port que se quiere configurar
2. (config) switchport mode trunk
3. (config) switchport trunk allowed vlan 1-2, a,b,c ... x,y,z, 1002-1005 donde a, b, c, etc son los numeros de vlan a los que van a tener acceso los enlaces troncales

**Configuracion de VTP en Ethernet Switch**
1. (config) vtp domain nombre_dominio
2. (config) vtp password password_dominio
3. (config) vtp mode client/server, seleccionar si el switch funcionara como servidor o cliente
4. (config) spanning-tree vlan # root primary para indicar que el switch que va a funcionar como servidor va a ser la ruta primaria
