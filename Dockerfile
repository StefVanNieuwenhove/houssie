# Force buildkit to use amd64
# syntax=docker/dockerfile:1.4

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

COPY Houssie.sln .
COPY Houssie.Api/Houssie.Api.csproj Houssie.Api/
COPY Houssie.Core/Houssie.Core.csproj Houssie.Core/
COPY Houssie.Application/Houssie.Application.csproj Houssie.Application/
COPY Houssie.Infrastructure/Houssie.Infrastructure.csproj Houssie.Infrastructure/

RUN dotnet restore Houssie.sln

COPY . .
RUN dotnet publish Houssie.Api/Houssie.Api.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080
EXPOSE 8081
ENTRYPOINT ["dotnet", "Houssie.Api.dll"]
