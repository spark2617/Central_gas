# 📱 Aplicativo Mobile - React Native & Django

## 📌 Sobre o Projeto
Este projeto foi desenvolvido utilizando **React Native** para o frontend e **Django** para o backend. O código-fonte está estruturado para facilitar a manutenção e escalabilidade.

## 🏗 Estrutura do Projeto
### 📂 Frontend (React Native)
O código do aplicativo está localizado na pasta **`src`**, contendo os seguintes diretórios principais:
- **components/**: Componentes reutilizáveis, incluindo cabeçalhos, rodapés e modais.
- **screens/**: Telas do aplicativo, como login, cadastro e área do cliente.
- **services/**: Serviços de API, notificações e armazenamento local.
- **styles/**: Arquivos de estilização, como definições de cores.

### 📂 Backend (Django)
O backend foi desenvolvido com **Django** e segue a estrutura padrão de um projeto Django REST Framework:
- **models/**: Contém os modelos de banco de dados.
- **serializers/**: Serializadores para transformar os modelos em JSON.
- **views/**: Contém a lógica das APIs.
- **service/**: Contém regras de negócios adicionais.
- **utils/**: Utilitários auxiliares.
- **authentication/**: Gerenciamento de autenticação de usuários.

## 🛠 Modelos do Banco de Dados

Abaixo estão alguns dos principais modelos utilizados no backend:

### Cliente
```python
class Cliente(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='cliente')
    nome_completo = models.CharField(max_length=200)
    endereco = models.OneToOneField(Endereco, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.nome_completo
```

### Empresa
```python
class Empresa(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='empresa')
    nome = models.CharField(max_length=100)
    numero_licenca = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    nome_fantasia = models.CharField(max_length=100, null=True, blank=True)
    razao_social = models.CharField(max_length=200, null=True, blank=True)
    empresa_apresentada = models.BooleanField(default=False)
    imagem_contrato_social = models.ImageField(upload_to='contratos_sociais/', null=True, blank=True)
    logo = models.ImageField(upload_to='logo_empresas/', null=True, blank=True)
    endereco = models.OneToOneField('Endereco', on_delete=models.CASCADE, related_name="empresa", null=True, blank=True)
```

### Endereço
O modelo **Endereco** contém informações detalhadas sobre localização.
```python
class Endereco(models.Model):
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    bairro = models.CharField(max_length=100)
    rua = models.CharField(max_length=100)
    numero = models.CharField(max_length=10)
    tipo_moradia = models.CharField(max_length=50)
    
    lat = models.CharField(max_length=100, null=True, blank=True)
    lon = models.CharField(max_length=100, null=True, blank=True)
```

### Obtenção de Coordenadas via API do Google
Para buscar coordenadas geográficas automaticamente, utilizamos a **API de Geocodificação do Google**.

#### 🔑 Como obter a chave da API Google Maps?
1. Acesse: [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um projeto ou selecione um existente.
3. Vá até **APIs & Services > Library** e ative a **Geocoding API**.
4. Em **APIs & Services > Credentials**, crie uma **chave de API**.
5. Substitua `sua_key` no código abaixo pela chave obtida:

```python
params = {
    "country": "BR",
    "address": endereco_completo,
    "key": "sua_key"
}
```

### Pedido e Produto
```python
class Pedido(models.Model):
    cliente = models.ForeignKey('Cliente', on_delete=models.CASCADE, related_name='pedidos')
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    data_pedido = models.DateTimeField(auto_now_add=True)
    expectativa = models.DateTimeField(null=True, blank=True)
    quantidade = models.PositiveIntegerField(default=1)

class Produto(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
```

## 👤 Autenticação e Gerenciamento de Usuários
O projeto possui um sistema de usuários customizado usando **AbstractBaseUser**:

```python
class CustomUser(AbstractBaseUser, PermissionsMixin):
    TIPO_CHOICES = (
        ('empresa', 'Empresa'),
        ('cliente', 'Cliente'),
    )
    telefone = models.CharField(max_length=15, null=True, blank=True, unique=True)
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
```

### Criando um Superusuário
Para criar um **superusuário**, execute:
```bash
python manage.py createsuperuser
```
E preencha os dados solicitados.


## Integração com o WppConnect

O backend possui integração com **WppConnect** para envio de mensagens via WhatsApp. Para utilizar este serviço, é necessário configurar o servidor **WppConnect** e definir a URL e token no arquivo de configurações do Django (`settings.py`).

Exemplo de envio de mensagem:

```python
def enviar_mensagem_wppconnect(numero_destino, mensagem):
    url = getattr(settings, "WPP_CONNECT_URL", "http://localhost:21465/api/test/send-message")
    token = getattr(settings, "WPP_CONNECT_TOKEN", "")
    payload = {"phone": numero_destino, "message": mensagem}
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    response = requests.post(url, json=payload, headers=headers)
    return response.json()
```

### Como Configurar o WppConnect
1. **Baixar e Instalar** o WppConnect Server.
2. **Iniciar o Servidor** e obter o token de autenticação.
3. **Configurar a URL e Token** no `settings.py` do Django.
4. **Testar a Integração** enviando uma mensagem de teste.

## Funcionalidades da Aplicação

- **Busca de Empresas Próximas**: O sistema busca empresas que possuem os produtos desejados e estão próximas ao usuário.
- **Notificação via WhatsApp**: Clientes são notificados quando a expectativa de um pedido está prestes a vencer.
- **Gestão de Pedidos**: O usuário pode criar e gerenciar pedidos de produtos.
- **Autenticação de Usuários**: Implementado com `CustomUser` no Django.

### Notificação Automática de Expectativa

A aplicação possui uma tarefa que verifica os pedidos e envia uma notificação via WhatsApp para lembrar os clientes sobre seus pedidos pendentes.

```python
def NotificarUsuarioSobreExpectativa():
    hoje = now()
    tres_dias = hoje + timedelta(days=3)
    dois_dias = hoje + timedelta(days=2)

    pedidos_gas = Pedido.objects.filter(produto_id=1, expectativa__date=tres_dias.date())
    pedidos_outros = Pedido.objects.filter(produto_id__ne=1, expectativa__date=dois_dias.date())

    pedidos = list(pedidos_gas) + list(pedidos_outros)

    for pedido in pedidos:
        cliente = pedido.cliente
        numero_destino = cliente.user.telefone 
        mensagem = f"Olá {cliente.nome}, lembrete: seu pedido do produto '{pedido.produto.nome}' está previsto para {pedido.expectativa}. Prepare-se com antecedência!"
        enviar_mensagem_wppconnect(numero_destino, mensagem)
```



## 🚀 Como Rodar o Projeto

### 📌 Frontend (React Native)
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o app:
   ```bash
   npm start
   ```


### 📌 Backend (Django)
1. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
2. Aplique as migrações:
   ```bash
   python manage.py migrate
   ```
3. Inicie o servidor:
   ```bash
   python manage.py runserver
   ```

   

## 📌 Conclusão
Este projeto integra um aplicativo mobile com um backend robusto em Django, permitindo gestão eficiente de clientes, empresas, produtos e pedidos.

Se precisar de mais informações, entre em contato! 📩

