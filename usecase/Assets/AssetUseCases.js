
const Asset = require("../../entitities/Asset.js");
const AssetRepository = require('../../infrastructure/repository/AssetRepository.js');
class AssetUseCases{
// UseCases for User Administration done by a Root/Other Role



  constructor()
  {
    this.assetRepo = new AssetRepository();
  }

  async add(Data) {
    
    console.log(Data);
    
    const newAsset = new Asset(Data);
    const id = await this.assetRepo.add(newAsset);
    return {id};
  }

  async get(Id) {
    console.log(Id);
    return await this.assetRepo.get(Id);
  }


  async getAll() {
    return await this.assetRepo.getAll();
  }

  async delete(Id) {
    return await this.assetRepo.delete(Id);
  }

  async update(Id, Data) {
    
    return await this.vmRepository.update(Id,Data);
  }


}


module.exports = AssetUseCases;