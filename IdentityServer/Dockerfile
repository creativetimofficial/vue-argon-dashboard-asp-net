FROM bitnami/aspnet-core:6.0.13 AS base
WORKDIR /app
EXPOSE 5000

FROM bitnami/dotnet-sdk:6.0.405 AS build
WORKDIR /src
COPY ["IdentityServer.csproj", "IdentityServer/"]

RUN dotnet restore "IdentityServer/IdentityServer.csproj"
COPY . IdentityServer
WORKDIR "/src/IdentityServer"
RUN dotnet build "IdentityServer.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "IdentityServer.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS http://*:5000
ENTRYPOINT ["dotnet", "IdentityServer.dll"]