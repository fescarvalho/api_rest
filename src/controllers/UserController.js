import User from '../models/User';

class UserController {
   async store(req, res) {
    try{

       const novoUser = await User.create(req.body);
       const {id, nome, email} = novoUser;
       return res.json({id, nome, email});
    } catch (e) {
      return res.status(400).json({
       errros: e.errors.map(err => err.message)
      });
    }
  }
  //INDEX
  async index(req, res) {
    try {
      const users = await User.findAll({attributes: ['id', 'nome', 'email']});
      return res.json(users);
    } catch(e) {
      return res.json(null)
    }
  }
  //SHOW
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const{id, nome, email} = user;
      return res.json({id, nome, email});
    } catch(e) {
      return res.json(null)
    }
  }

  //UPDATE
  async update(req, res) {

    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const {id, nome, email} = novosDados;
      return res.json({id, nome, email});

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  //DELETE
  async delete(req, res) {
    try {

      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe.'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch(e) {
      return res.status(400).json({
        errros: e.errors.map(err => err.message)
       });
    }
  }

}

export default new UserController();



/*
index - lista todos os usuarios  --> GET
store ou create - cria um novo usuario  --> PIST
delete - apaga um usuario  --> DELETE
show - mostra um usuario  --> GET
update - atualiza um usuario  --> PATCH ou PUT
*/