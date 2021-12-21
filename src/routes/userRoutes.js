import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router  = new Router();

//router.get('/', userController.index);
//router.get('/:id', userController.show);


router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
/*
index - lista todos os usuarios  --> GET
store ou create - cria um novo usuario  --> PIST
delete - apaga um usuario  --> DELETE
show - mostra um usuario  --> GET
update - atualiza um usuario  --> PATCH ou PUT
*/