# 🚀 Minha Direção - Task Manager

O **Minha Direção** é um sistema de gerenciamento de tarefas (To-Do List) moderno e intuitivo, desenvolvido em React. O projeto foca em uma interface limpa com contraste entre Azul Marinho e Branco, permitindo que o usuário organize suas metas diárias com facilidade.

## 📋 Requisitos do Sistema (RF)

O sistema foi construído atendendo aos seguintes requisitos funcionais:

* **RF_001:** Permitir o cadastro de novas tarefas.
* **RF_002:** Listar todas as tarefas cadastradas de forma clara.
* **RF_003:** Permitir marcar e desmarcar tarefas como concluídas.
* **RF_004:** Atualização automática da lista após qualquer ação.
* **RF_005:** Visualização em tempo real do status (Pendente/Concluído) de cada item.

## 🛠️ Tecnologias Utilizadas

* **React.js**: Biblioteca principal para construção da interface.
* **Vite**: Ferramenta de build para um desenvolvimento rápido.
* **CSS3**: Estilização personalizada com foco em UX (User Experience).
* **React Hooks (`useState`)**: Para gerenciamento de estado das tarefas.

## 📂 Estrutura de Pastas

```text
src/
├── assets/         # Ícones e imagens estáticas
├── components/     # Componentes modulares (Home, TaskForm, TaskList, TaskItem)
├── App.jsx         # Componente principal com a lógica de estado
├── App.css         # Estilização principal e identidade visual
└── main.jsx        # Ponto de entrada do React
