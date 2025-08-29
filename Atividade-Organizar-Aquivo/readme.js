/*
 *
 * Exercícios
 * 
 *  1. Criar um programa que organize arquivos de uma pasta
 *   em subpastas baseadas em suas extensões. O programa
 *   deve usar os módulos fs, path, os, url e events.
 *  
 * Instruções
 *    1. Crie uma função organizarArquivos(pasta) que receba
 *    como parâmetro o caminho de uma pasta.
 * 
 *    2. Use fs.readdir para listar os arquivos da pasta.
 * 
 *    3. Para cada arquivo:
 *    • Obtenha a extensão com path.extname.
 *    • Crie (se não existir) uma subpasta dentro da pasta principal com
 *    o nome da extensão (ex.: txt, jpg, js).
 *    • Mova o arquivo para essa subpasta usando fs.rename.
 * 
 *    4. Use um EventEmitter para emitir um evento chamado
 *    "arquivoMovido" sempre que um arquivo for organizado. O
 *     evento deve passar:
 *     • Nome do arquivo (path.basename)
 *     • Nova localização (path.resolve)
 *     • Usuário atual (os.userInfo().username)
 *     • URL do novo arquivo (new URL('file://' + path.resolve(...)))
 * 
 *     5. No script principal, adicione um listener para
 *     "arquivoMovido" que imprima as informações no console.
 *  
 *  Objetivos de aprendizado
 *      • Ler e manipular arquivos com fs.
 *      • Trabalhar com caminhos e extensões usando path.
 *      • Obter informações do sistema com os.
 *      • Criar URLs locais com url.
 *      • Criar e utilizar eventos customizados com events.
 * 
 *  Exemplo de execução esperada
 *       Digite a pasta a ser organizada: ./meus_arquivos
 *       Arquivo "foto1.jpg" movido para ./meus_arquivos/jpg/foto1.jpg
 *       Usuário: aluno
 *      URL do arquivo: file:///c:/Users/raffael/projetos/meus_arquivos/jpg/foto1.jpg
 *       Arquivo "documento.txt" movido para ./meus_arquivos/txt/documento.txt
 *       Usuário: aluno
 *       URL do arquivo:
 *       file:///c:/Users/raffael/projetos/meus_arquivos/txt/documento.txt
 * 
 */ 