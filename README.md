``` bash
# plantUML Server
docker run -d -p 8080:8080 --name puSev plantuml/plantuml-server:jetty
# http://localhost:8080/

git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/joehecn/swire-docs.git
git push -u origin main
```