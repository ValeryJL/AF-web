# Deployment Guide for GitHub Pages

Hello! I have already initialized your local folder `/home/valeryjl/pagina/web` with Git, packed everything up, and committed the changes on a `main` branch. 

To put your site live for free on GitHub Pages, just follow these simple steps:

### 1. Create your repository on GitHub
1. Go to [GitHub.com](https://github.com/new).
2. Type a name for your repository under **Repository name** (for example: `af-construcciones`).
3. Make sure the repository is marked as **Public** (required for free GitHub Pages).
4. **Don't check anything else** (do not add a README or .gitignore from the web interface, as we already have yours locally).
5. Click the green button **Create repository**.

### 2. Connect and Upload your code
GitHub will show you a page with many commands. Ignore them and run exactly these lines in your terminal (make sure your terminal is standing inside the `/home/valeryjl/pagina/web` folder):

```bash
cd /home/valeryjl/pagina/web
git branch -M main
git remote add origin https://github.com/[TU_NOMBRE_DE_USUARIO]/[el-nombre-de-tu-repo].git
git push -u origin main
```
*(Asegúrate de cambiar `[TU_NOMBRE_DE_USUARIO]` y `[el-nombre-de-tu-repo]` por los valores correctos que te muestre GitHub).*

### 3. Activate GitHub Pages
Once the terminal finishes uploading the files:
1. Reload your repository page on GitHub. You should see all your files there!
2. Click on the the ⚙️ **Settings** tab at the top of the repository.
3. On the left sidebar, scroll down and click on **Pages**.
4. Under the "Build and deployment" section, find "Source" and leave it as *Deploy from a branch*.
5. Under "Branch", click on the dropdown that says `none`, select `main`, and hit the **Save** button.

**¡Eso es todo!** GitHub tardará entre 1 y 2 minutos en compilar tu sitio. Luego de un rato, te mostrará arriba un enlace web en verde diciendo "Your site is live at..." desde el cual cualquier persona en el mundo podrá acceder.
