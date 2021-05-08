# Redes de Computadoras 1

## __Integrantes__
**201801237**	JOSÉ RAFAEL MORENTE GONZÁLEZ

**201801262**	JUAN JOSÉ RAMOS CAMPOS

**201807228**	GERSON ALEJANDRO BELTETÓN URBINA

**201807266**	LUIS FERNANDO VELÁSQUEZ ZACARÍAS


# Documentación 


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


## Topología No. 1
### Para el desarrollo de la topología se dispuso de la red 10.20.0.0/16, se realizó el cálculo de subredes, según el número de subredes que necesitaron para interconectar los router de la red WAN. 
### Dichas redes son las siguientes



***ROUTER 3***

* puerto f1/0 ip 10.20.0.0/18
* puertos f0/0 ip 10.20.128.0/18
* puertos f0/1 ip 10.20.64.0/18.


***ROUTER 4***
* puertos f0/0 ip 10.20.64.1/18
* puertos f0/1 ip 10.20.128.1/18.


***ROUTER 5***

* puerto f1/0 ip 10.20.192.2/18
* puertos f0/0 ip 10.20.128.3/18
* puertos f0/1 ip 10.20.64.3/18.

***ROUTER 6***
* puertos f0/1 ip 10.20.64.5/18
* puertos f0/0 ip 10.20.0.1/18.

***ROUTER 7***
* puertos f0/0 ip 10.20.192.1/18
* puertos f0/1 ip 10.20.128.5/18.


### En dicha topologia se implementaron los protocolos VRRP y HSRP, para el protocolo VRRP el Router R6 se configuro como activo con los siguientes comandos
```
interface [tipo]#/#
```
```
ip address [ip] [mascara de red]
```
```
Vrrp # ip [ip-virtual]
```
```
Vrrp # priority [num]
```
```
Vrrp # preempt
```
### Donde [num] es el numero de prioridad que tendra el router, para la practica se cunfiguro en 1

### Por su parte para el protocolo HSRP se utilizaron los siguiente comandos
```
interface [tipo]#/#
```
```
standby # ip [ip-virtual]
```
```
standby # priority [num]
```
```
standby # preempt
```

### Por ultimo, se configuro RIP en cada router para proporcionar conectividad entre las diferentes vlan que componen la red, para configurar el Router se utilzaron los siguientes comandos


```
router rip
```

```
version 2
```

```
network [ip-address]
```
```
network [ip-address]
```


![Topologia 1](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1620419116/Redes%20de%20Computadoras/Proyecto/WhatsApp_Image_2021-05-07_at_2.23.34_PM_xd3frv.jpg)

## Topología No. 2
### Se realizó una topología que incluye cuatro switch capa 3, tres switch capa 2 y varias maquinas distribuidas en vlans con direccionamiento diferente, cada pc pertenece a una VLAN distinta a las demas pc, por lo cual están aislados. Se configuraron ciertos puertos de los switch como enlaces troncales para enviar el tráfico de las 3 VLAN, se crearon port-channels para la redundacia del trafico de informacion. El router principal se conectó a la nube configurada con los datos de la VPN.

### Se configuro DHCP en el router R1 que servira para proporcionar direccionamiento a las diferentes redes contenidas en la red, dichas redes son las siguientes


**VLAN VENTAS:**
* Numero: 30
* Rango de red: 192.168.120.0 - 192.168.120.127
* Gateway:192.168.120.1
* Mask: 255.255.255.128
* Cant Host: 123


**VLAN INFORMATICA:**
* Numero: 40
* Rango de red: 192.168.120.128 - 192.168.120.191
* Gateway:192.168.120.9
* Mask: 255.255.255.192
* Cant Host: 37




**VLAN RRHH:**
* Numero: 10
* Rango de red: 192.168.120.192 - 192.168.120.223
* Gateway:192.168.120.193
* Mask: 255.255.255.224
* Cant Host: 21

**VLAN CONTABILIDAD:**
* Numero: 20
* Rango de red: 192.168.120.224 - 192.168.120.239
* Gateway:192.168.120.225
* Mask: 255.255.255.240
* Cant Host: 9


### Por ultimo, se configuro RIP en el router R1 para proporcionar conectividad entre las diferentes vlan que componen la red, para configurar el Router se utilzaron los siguientes comandos


```
router rip
```

```
version 2
```

```
network [ip-address]
```
```
network [ip-address]
```


![Topologia 2](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1620419391/Redes%20de%20Computadoras/Proyecto/WhatsApp_Image_2021-05-07_at_2.29.19_PM_lullsl.jpg)



## Topología No. 3
### Para el desarrollo de la topología se dispuso de la red 192.168.20.0/24, se realizó el cálculo de subredes, y creacion de VLANs que simularan una red totalmente diferente hasta las descritas hasta el momento, dicha red utilizara la nube y el protocolo RIP para tener la conectividad necesaria con el resto de las redes. 

### Las VLAN de la topologia son las siguientes

**VLAN ADMIN:**
* Numero: 10
* Rango de red: 192.168.20.0 - 192.168.20.31
* Gateway:192.168.20.1
* Mask: 255.255.255.224


**VLAN BD:**
* Numero: 20
* Rango de red: 192.168.20.32 - 192.168.20.63
* Gateway:192.168.20.31
* Mask: 255.255.255.224

**VLAN WEB:**
* Numero: 30
* Rango de red: 192.168.20.64 - 192.168.20.95
* Gateway:192.168.20.65
* Mask: 255.255.255.224

**VLAN RRHH:**
* Numero: 40
* Rango de red: 192.168.20.96 - 192.168.20.127
* Gateway:192.168.20.97
* Mask: 255.255.255.224

**VLAN CONTA:**
* Numero: 50
* Rango de red: 192.168.20.128 - 192.168.20.159
* Gateway:192.168.20.129
* Mask: 255.255.255.224


### Por ultimo, se configuro RIP en el router R1 para proporcionar conectividad entre las diferentes vlan que componen la red, para configurar el Router se utilzaron los siguientes comandos


```
router rip
```

```
version 2
```

```
network [ip-address]
```
```
network [ip-address]
```


![Topologia 3](https://res.cloudinary.com/dtpqmjmhk/image/upload/v1620418933/Redes%20de%20Computadoras/Proyecto/TOPO3_mvadfa.png)



