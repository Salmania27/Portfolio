import React, { Component } from 'react';
import './App.css';
import Utama from './components/utama';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class App extends Component {
  render(){
    return(
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Portofolio" scroll>
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/tentang">Tentang</Link>
              <Link to="/karya">Karya</Link>
              <Link to="/kontak">Kontak</Link>
            </Navigation>
          </Header>
          <Drawer title="Portofolio">
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/tentang">Tentang</Link>
              <Link to="/karya">Karya</Link>
              <Link to="/kontak">Kontak</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Utama />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
