# Redes de Computadoras 1

## __Integrantes__
**201801237**	JOSÉ RAFAEL MORENTE GONZÁLEZ

**201801262**	JUAN JOSÉ RAMOS CAMPOS

**201807228**	GERSON ALEJANDRO BELTETÓN URBINA

**201807266**	LUIS FERNANDO VELÁSQUEZ ZACARÍAS


## Configuración Red Multipunto
Se exportan clientes de open vpn para realizar la conexion.

![VPN 1 ](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682898/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_10.20.37_PM_ovpnwd.jpg)

![VPN 2 ](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617683178/Redes%20de%20Computadoras/Practica%202/OpenVPN_Connect_5_04_2021_22_25_46_ry3l7d.png)

Se crean tuneles UDP para realizar la conexión y se configuran puertos cruzados.

![Tunel](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682921/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_10.21.50_PM_olucnj.jpg)

Configuracion del protocolo de red

![IPV4](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617683270/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_10.27.22_PM_y5ascv.jpg)

Se prueba la comunicación entre topoligias ubicadas en diferentes nodos de la red multipunto.

![PING1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682898/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_9.52.26_PM_iqtvpq.jpg)

![PING2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682898/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_9.52.43_PM_dpp5f5.jpg)

## __Configuración de la topología de red en GNS3__

## Configuración VPN Google Cloud
1. Debemos de crear una regla de firewall, colocamos el nombre open-vpn-port.

![Firewall 1 ](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615617660/Redes%20de%20Computadoras/Practica%201/1_rk0xfh.png)

2. Posterior debemos de permitir todos los protocolos y puertos para terminar de configurar el Firewall.

![Firewall 2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615617659/Redes%20de%20Computadoras/Practica%201/2_gpqdd6.png)

3. Si no tenemos habilitado Compute Engine API lo habilitamos para poder crear la maquina virtual.

![Firewall 3](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615687726/Redes%20de%20Computadoras/Practica%201/3_hqutem.png)

4. Creamos una maquina virtual con el nombre vpn-ubuntu, con sistema de 4GB de RAM y 2 CPU virtuales.

![Firewall 4](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615687970/Redes%20de%20Computadoras/Practica%201/4_w3igew.png)

5. Seleccionamos la imagen de Ubuntu 18.04 LTS y un disco persistente equilibrado de 10GB.

![Firewall 5](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615688084/Redes%20de%20Computadoras/Practica%201/5_repsnk.png)

6. Debemos de permitir el trafico HTTP y HTTPS de nuestra maquina virtual.

![Firewall 6](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615688493/Redes%20de%20Computadoras/Practica%201/6_le4t9e.png)

7. Nos dirigimos a las herramientas de redes. En las etiquetas de red colocamos la referencia a la regla de firewall que configuramos en el paso 1.

![Firewall 7](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615688909/Redes%20de%20Computadoras/Practica%201/7_j1dyzx.png)

8. Una vez creada nuestra maquina virtual nos conectaremos mediante el protocolo SSH a nuestra maquina virtual.

![Firewall 8](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615689104/Redes%20de%20Computadoras/Practica%201/8_baiqh2.png)
![Firewall 9](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615690180/Redes%20de%20Computadoras/Practica%201/9_2_ms3xlv.png)

9. Procedemos a realizar una actualización de nuestro servidor con el siguiente comando.

```
$ sudo apt-get update
```

10. Una vez actualizado el comando anterior, procederemos a ejecutar el siguiente, para instalar las actualizaciones disponibles de todos los paquetes actualmente instalados

```
$ sudo apt-get upgrade
```

11. Posteriormente procederemos a instalar OPEN VPN en nuestra maquina virtual.

```
$ sudo wget https://cubaelectronica.com/OpenVPN/openvpn-install.sh​ && sudo bash openvpn-install.sh
```

12. Luego configuramos los parametros de OPEN VPN.
- [IP Privada] - Dejamos la que nos da por defecto
- [IP Publica] - Colocamos la ip publica que nos proporciona el servidor
- [Puerto] - El puerto donde queremos escuchar OPEN VPN dejamos el por defecto
- [DNS] - Seleccionamos el DNS de Google para usar con la VPN
- [Nombre VPN] - Finalmente configuramos el nombre para el certificado de cliente.

![Firewall 10](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615691796/Redes%20de%20Computadoras/Practica%201/10_bqz8wq.png)

13. Una vez finalizado el proceso descargamos el archivo, para ello presionamos el boton de configuracion

![Firewall 11](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615692518/Redes%20de%20Computadoras/Practica%201/11_na8vq8.png)

14. Escribimos la ruta donde se encuentra nuestro archivo y verificamos que no haya ningun espacio, presionamos descargar y obtenemos nuestro archivo para conectarnos a la primera red.

![Firewall 12](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615692522/Redes%20de%20Computadoras/Practica%201/12_x48raq.png)

14. Para generar mas clientes ingresamos los comandos.

```
sudo bash open-vpn.sh
```

```
sudo bash openvpn-install.sh
```

## Configuración Open VPN Connect

1. Descargar Open VPN Connect 

![OpenVPN 1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615693825/Redes%20de%20Computadoras/Practica%201/13_drnypm.png)

2. Abrir archivo del cliente que se genero.

![OpenVPN 2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615694049/Redes%20de%20Computadoras/Practica%201/14_jiuybl.png)

3. Confirmamos las opciones de nuestro archivo importado.

![OpenVPN 3](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615694049/Redes%20de%20Computadoras/Practica%201/15_egt4jf.png)

4. Revisamos que todo este conectado correctamente.

![OpenVPN 4](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615694048/Redes%20de%20Computadoras/Practica%201/16_noavde.png)

5. Luego procederemos a realizar un ping a la VPN que apuntamos desde nuestra maquina fisica.

![OpenVPN 5](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615694951/Redes%20de%20Computadoras/Practica%201/17_yrelsd.png)


## Configuración Cloud GNS3

1. En la maquina 1 configuramos el UDP Tunnel y colocamos la ip de la maquina a la cual nos queremos conectar, el puerto local a usar será el 30000 y el puerto remoto el 20000.

![Cloud GNS3 1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615697089/Redes%20de%20Computadoras/Practica%201/T1-1_mvc1kv.png)

2. En la maquina 2 configuramos el UDP Tunnel y colocamos la ip de la maquina a la cual nos queremos conectar, el puerto local y remoto se configuran de manera contraria a la maquina 1.

![Cloud GNS3 2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1615697218/Redes%20de%20Computadoras/Practica%201/T2-1_rm9bul.jpg)

3. Realizamos el mismo paso para conectar la topología 3 con la topología 2 y debería ser capaz de obtener una conexión a travez del UDP TUNEL.

## __Configuración por dispositivo__

**Topología 1**

![Topo1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617683246/Redes%20de%20Computadoras/Practica%202/Captura_m05bqr.png)

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

![Topo2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617682979/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_10.22.25_PM_ltbsq8.jpg)

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

![Topo3](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1617683305/Redes%20de%20Computadoras/Practica%202/WhatsApp_Image_2021-04-05_at_9.32.42_PM_n2wrie.jpg)

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
