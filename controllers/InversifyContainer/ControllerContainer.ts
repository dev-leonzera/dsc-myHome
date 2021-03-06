import { Container } from "inversify";
import { BillController } from "../BillController";
import { ExpensesController } from "../ExpensesController";
import { IController } from "../IController";
import { ItemController } from "../ItemController";
import ControllerTypes from "./ControllerTypes";

//criando container com o inversify
const ControllerContainer = new Container()

//instanciando controllers dentro do container ControllerContainer
ControllerContainer.bind<IController>(ControllerTypes.Controller).to(BillController);
ControllerContainer.bind<IController>(ControllerTypes.Controller).to(ExpensesController);
ControllerContainer.bind<IController>(ControllerTypes.Controller).to(ItemController);

export default ControllerContainer;