var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "API de Tarefas");

app.MapGet("/tarefas", () => "Requisição GET (LISTAR TAREFAZ)");
app.MapGet("/tarefas/concluidas", () => "LISTAR CONCLUIDAS");
app.MapGet("/tarefas/{id}", () => "BUSCAR TAREFA ESPECIFICA");

app.MapPost("/tarefas", () => "Requisição POST (Incluir)");

app.MapPut("/tarefas/{id}", () => "Requisição PUT  (Atualizar)");

app.MapDelete("/", () => "Requisição DELETE (Excluir)");

app.Run();

