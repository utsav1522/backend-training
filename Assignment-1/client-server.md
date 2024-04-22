# Client-Server Architecture

## <u>Introduction</u>

<p align = "justify">
Client-server architecture is a type of computer network where a cilent makes multiple requests and receive multiple files and servies as a response from from a centralised server over a local connection. A client uses an application UI to interact with the server and retrieve the information from the servers.
</p>
<p align = "justify">
The user can use any internet abled device such as a smartphone, laptop, tablet to access the application that acts as  a client and and make a call to server.
</p>

## <u>How does a Client-Server Model Work ? </u> 
<p align = "justify">
The main thing required at the client level to be a part of the cleint server architecture is to have a device that can act as a client and is able to make a request to server over a network. The client can have a wired / wireless network connection 
</p>

<p align = "justify">
When a user makes a HTTP request to the server, the request is made using a domain name. This request is then recieved by a DNS resolver that returns an IP address back to the browser which inturn makes a request to the server located at the specific IP. 
</p>

<p align = "justify">
At the server end, the request is received and then the request is analysed with the method in which the request was made (either GET / POST / PUT / DELETE).After analyzing the same, the request is then processed as per the need. The Database is queried if needed for the required data by the server and then the server serves the response to the client.
</p>

## 1-tier Architecture
<p align = "justify">
In 1-tier architecture, the presentation, business logic, and data layers are all stored on a single device or a shared storage device. A good example is a desktop application that works offline and stores all its data on the same device it's running from.
</p>

## 2-tier Architecture
<p align = "justify">
In 2-tier architecture, the presentation and business logic layers are stored on the client while the data layer is stored on a server. So as long as the code of an application is fully executed on the client and some of the data is being stored in a remote database, that application fits the 2-tier architecture criteria.
</p>

## 3-tier Architecture
<p align = "justify">
The presentation layer is stored on the client, the business logic layer is stored on one server, and the data layer is stored on another server.
</p>

## N-tier architecture
<p align = "justify" >
In N-tier architecture, the presentation and data layers are left untouched, compared to the 3-tier architecture. The difference is that N-tier architecture splits the business logic layer into multiple layers to improve performance, management, and stability.
</p>


