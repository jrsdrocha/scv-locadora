import express, { Router } from "express";
import { ArtistaController } from "./controller/ArtistaController.js";
import { BairroController } from "./controller/BairroController.js";
import { CidadeController } from './controller/CidadeController.js'
import { ClienteController } from "./controller/ClienteController.js";
import { DevolucaoController } from "./controller/DevolucaoController.js";
import { DiretorController } from "./controller/DiretorController.js";
import { FitaController } from "./controller/FitaController.js";
import { FuncionarioController } from "./controller/FuncionarioController.js";
import { GerenteController } from "./controller/GerenteController.js";
import { TipoDeFilmeController } from './controller/TipoDeFilmeController.js'
import { UfController } from './controller/UfController.js'
import { FilmeController } from "./controller/FilmeCOntroller.js";
import { EmprestimoController } from "./controller/EmprestimoController.js";
import { ReservaController } from './controller/ReservaController.js';
import { MultaController } from './controller/MultaController.js';

const routes = express.Router();

routes.get('/artistas', ArtistaController.findAll);
routes.get('/artistas/:id', ArtistaController.findByPk);
routes.post('/artistas', ArtistaController.create);
routes.put('/artistas/:id', ArtistaController.update);
routes.delete('/artistas/:id', ArtistaController.delete);

routes.get('/bairros', BairroController.findAll);
routes.get('/bairros/:id', BairroController.findByPk);
routes.post('/bairros', BairroController.create);
routes.put('/bairros/:id', BairroController.update);
routes.delete('/bairros/:id', BairroController.delete);

routes.get('/cidades', CidadeController.findAll);
routes.get('/cidades/:id', CidadeController.findByPk);
routes.post('/cidades', CidadeController.create);
routes.put('/cidades/:id', CidadeController.update);
routes.delete('/cidade/:id', CidadeController.delete);
routes.get('/cidades/findByUf/:id', CidadeController.findByUf);

routes.get('/clientes', ClienteController.findAll);
routes.get('/clientes/:id', ClienteController.findByPk);
routes.post('/clientes', ClienteController.create);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.delete);

routes.get('/devolucoes', DevolucaoController.findAll);
routes.get('/devolucoes/:emprestimoId/:fitaId', DevolucaoController.findByPk);
routes.post('/devolucoes', DevolucaoController.create);
routes.put('/devolucoes/:emprestimoId/:fitaId', DevolucaoController.update);
routes.delete('/devolucoes/:emprestimoId/:fitaId', DevolucaoController.delete);
routes.get('/devolucoes/findByClienteAndPeriodo/:clienteId/:inicio/:termino', DevolucaoController.findByClienteAndPeriodo);
routes.get('/devolucoes/findQuantidadeDevolucaoClienteByPeriodo/:inicio/:termino', DevolucaoController.findQuantidadeDevolucaoClienteByPeriodo);

routes.get('/diretores', DiretorController.findAll);
routes.get('/diretores/:id', DiretorController.findByPk);
routes.post('/diretores', DiretorController.create);
routes.put('/diretores/:id', DiretorController.update);
routes.delete('/diretores/:id', DiretorController.delete);

routes.get('/fitas', FitaController.findAll);
routes.get('/fitas/:id', FitaController.findByPk);
routes.post('/fitas', FitaController.create);
routes.put('/fitas/:id', FitaController.update);
routes.delete('/fitas/:id', FitaController.delete);
routes.get('/fitas/findByFilme/:id', FitaController.findByFilme);
routes.get('/filmes/findByDanificadaAndDisponiveç/:danificada/:disponivel', FitaController.findByDanificadaAndDisponivel);

routes.get('/funcionarios', FuncionarioController.findAll);
routes.get('/funcionarios/:id', FuncionarioController.findByPk);
routes.post('/funcionarios', FuncionarioController.create);
routes.put('/funcionarios/:id', FuncionarioController.update);
routes.delete('/funcionarios/:id', FuncionarioController.delete);

routes.get('/gerentes', GerenteController.findAll);
routes.get('/gerentes/:id', GerenteController.findByPk);
routes.post('/gerentes', GerenteController.create);
routes.put('/gerentes/:id', GerenteController.update);
routes.delete('/gerentes/:id', GerenteController.delete);

routes.get('/tiposdefilme', TipoDeFilmeController.findAll);
routes.get('/tiposdefilme/:id', TipoDeFilmeController.findByPk);
routes.post('/tiposdefilme', TipoDeFilmeController.create);
routes.put('/tiposdefilme/:id', TipoDeFilmeController.update);
routes.delete('/tiposdefilme/:id', TipoDeFilmeController.delete);

routes.get('/ufs', UfController.findAll);
routes.get('/ufs/:id', UfController.findByPk);
routes.post('/ufs', UfController.create);
routes.put('/ufs/:id', UfController.update);
routes.delete('/ufs/:id', UfController.delete);

routes.get('/filmes', FilmeController.findAll);
routes.get('/filmes/:id', FilmeController.findByPk);
routes.post('/filmes', FilmeController.create);
routes.put('/filmes/:id', FilmeController.update);
routes.delete('/filmes/:id', FilmeController.delete);
routes.get('filmes/findByTipoDeFilme/:id', FilmeController.findByTipoDeFilme);

routes.get('/emprestimos', EmprestimoController.findAll);
routes.get('/emprestimos/:id', EmprestimoController.findByPk);
routes.post('/emprestimos', EmprestimoController.create);
routes.put('/emprestimos/:id', EmprestimoController.update);
routes.delete('/emprestimos/:id', EmprestimoController.delete);
routes.get('emprestimos/findTotaisAndQuantidadesEmprestimosOfClientesByPerioso/:inicio/:termino', EmprestimoController.findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo);
routes.get('emprestimos/findByCliente/:clienteId', EmprestimoController.findByCliente);
routes.get('/emprestimos/findByCLienteAndPeriodo/:clienteId/:inicio/:termino', EmprestimoController.findByClienteAndPeriodo);
routes.get('/emprestimos/findQuantidadesEmprestimosOfBairrosByPeriodo/:inicio/:termino', EmprestimoController.findQuantidadesEmprestimosOfBairrosByPeriodo);
routes.get('/emprestimos/findQuantidadesEmprestimosOfFilmesByPeriodo/:inicio/:termino', EmprestimoController.findQuantidadesEmprestimosOfFilmesByPeriodo);
routes.get('/emprestimos/findTotaisAnoMes', EmprestimoController.findTotaisAnoMes);

routes.get('/reservas', ReservaController.findAll);
routes.get('/reservas/:id', ReservaController.findByPk);
routes.post('/reservas', ReservaController.create);
routes.put('/reservas/:id', ReservaController.update);
routes.delete('/reservas/:id', ReservaController.delete);
routes.get('/reservas/findByFitasAndStatus/:fitaId/:status', ReservaController.findByFitaAndStatus);
routes.get('/reservas/findByClienteAndPeriodo/:clienteId/:inicio/:termino', ReservaController.findByClienteAndPeriodo);
routes.get('/reservas/findQuantidadesReservasOfClientesByPeriodo', ReservaController.findQuantidadesReservasOfClientesByPeriodo);

routes.get('/multas', MultaController.findAll);
routes.get('/multas/:id', MultaController.findByPk);
routes.post('/multas', MultaController.create);
routes.put('/multas/:id', MultaController.update);
routes.delete('/multas/:id', MultaController.delete);


export default routes;