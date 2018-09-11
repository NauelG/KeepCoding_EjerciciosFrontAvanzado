import APIService from './API-service';

class SongService {
  constructor() {
    this.APIServiceInstance = new APIService();
    this.model = 'songs';
  }

  async getSongs() {
    return this.APIServiceInstance.get(this.model);
  }
}

export default SongService;
