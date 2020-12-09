import { Container } from "inversify";
import { BillController } from "../BillController";
import { IController } from "../IController";
import ControllerTypes from "./ControllerTypes";

//criando container com o inversify
const ControllerContainer = new Container()

//instanciando controllers dentro do container ControllerContainer
ControllerContainer.bind<IController>(ControllerTypes.Controller).to(BillController);

export default ControllerContainer;