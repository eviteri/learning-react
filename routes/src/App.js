import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link,
  Switch,
  //Redirect
} from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Pricing from './pages/Pricing/Pricing';
import KindWords from './pages/KindWords/KindWords';
import Blog from './pages/Blog/Blog';
import SinglePost from './pages/SinglePost/SinglePost';
import Contact from './pages/Contact/Contact';
import NoFound from './pages/NoFound/NoFound';

class App extends Component {
  state = {
    items: [
			{
				"id": 65,
				"order": 1,
				"parent": 0,
				"title": "Home",
				"url": "http://api.bhumiphotography.com/home/home/",
				"attr": "",
				"target": "",
				"classes": "",
				"xfn": "",
				"description": "",
				"object_id": 61,
				"object": "home",
				"object_slug": "home",
				"type": "post_type",
				"type_label": "Home"
			},
			{
				"id": 69,
				"order": 2,
				"parent": 0,
				"title": "Gallery",
				"url": "#",
				"attr": "",
				"target": "",
				"classes": "",
				"xfn": "",
				"description": "",
				"object_id": 69,
				"object": "custom",
				"object_slug": "gallery",
				"type": "custom",
				"type_label": "Custom Link",
				"children": [
					{
						"id": 46,
						"order": 3,
						"parent": 69,
						"title": "From Bellies to Babies",
						"url": "http://api.bhumiphotography.com/gallery/from-bellies-to-babies/",
						"attr": "",
						"target": "",
						"classes": "",
						"xfn": "",
						"description": "",
						"object_id": 45,
						"object": "gallery",
						"object_slug": "from-bellies-to-babies",
						"type": "post_type",
						"type_label": "Gallery",
						"children": [
							{
								"id": 74,
								"order": 4,
								"parent": 46,
								"title": "Portraits",
								"url": "http://api.bhumiphotography.com/gallery/portraits/",
								"attr": "",
								"target": "",
								"classes": "",
								"xfn": "",
								"description": "",
								"object_id": 50,
								"object": "gallery",
								"object_slug": "portraits",
								"type": "post_type",
								"type_label": "Gallery",
								"children": [
									{
										"id": 200,
										"order": 4,
										"parent": 74,
										"title": "Eloy Test",
										"url": "http://api.bhumiphotography.com/gallery/portraits/",
										"attr": "",
										"target": "",
										"classes": "",
										"xfn": "",
										"description": "",
										"object_id": 50,
										"object": "gallery",
										"object_slug": "eloy-test",
										"type": "post_type",
										"type_label": "Gallery"
									}
								]
							}
						]
					},
					{
						"id": 54,
						"order": 4,
						"parent": 69,
						"title": "Milestones and Cake Smash",
						"url": "http://api.bhumiphotography.com/gallery/milestones-and-cake-smash/",
						"attr": "",
						"target": "",
						"classes": "",
						"xfn": "",
						"description": "",
						"object_id": 47,
						"object": "gallery",
						"object_slug": "milestones-and-cake-smash",
						"type": "post_type",
						"type_label": "Gallery"
					},
					{
						"id": 53,
						"order": 5,
						"parent": 69,
						"title": "I Do!",
						"url": "http://api.bhumiphotography.com/gallery/i-do/",
						"attr": "",
						"target": "",
						"classes": "",
						"xfn": "",
						"description": "",
						"object_id": 48,
						"object": "gallery",
						"object_slug": "i-do",
						"type": "post_type",
						"type_label": "Gallery"
					},
					{
						"id": 52,
						"order": 6,
						"parent": 69,
						"title": "Special Moments",
						"url": "http://api.bhumiphotography.com/gallery/special-moments/",
						"attr": "",
						"target": "",
						"classes": "",
						"xfn": "",
						"description": "",
						"object_id": 49,
						"object": "gallery",
						"object_slug": "special-moments",
						"type": "post_type",
						"type_label": "Gallery"
					},
					{
						"id": 51,
						"order": 7,
						"parent": 69,
						"title": "Portraits",
						"url": "http://api.bhumiphotography.com/gallery/portraits/",
						"attr": "",
						"target": "",
						"classes": "",
						"xfn": "",
						"description": "",
						"object_id": 50,
						"object": "gallery",
						"object_slug": "portraits",
						"type": "post_type",
						"type_label": "Gallery"
					}
				]
			},
			{
				"id": 42,
				"order": 8,
				"parent": 0,
				"title": "Client Lounge",
				"url": "https://clients.bhumiphotography.com/",
				"attr": "",
				"target": "",
				"classes": "",
				"xfn": "",
				"description": "",
				"object_id": 42,
				"object": "custom",
				"object_slug": "client-lounge",
				"type": "custom",
				"type_label": "Custom Link"
			},
			{
				"id": 66,
				"order": 9,
				"parent": 0,
				"title": "Pricing",
				"url": "http://api.bhumiphotography.com/pricing/pricing/",
				"attr": "",
				"target": "",
				"classes": "",
				"xfn": "",
				"description": "",
				"object_id": 62,
				"object": "pricing",
				"object_slug": "pricing",
				"type": "post_type",
				"type_label": "Pricing"
			},
			{
				"id": 75,
				"order": 10,
				"parent": 0,
				"title": "Kind Words",
				"url": "http://api.bhumiphotography.com/kind-words/kind-words/",
				"attr": "",
				"target": "",
				"classes": "",
				"xfn": "",
				"description": "",
				"object_id": 63,
				"object": "kind_words",
				"object_slug": "kind-words",
				"type": "post_type",
				"type_label": "Kind Words"
			},
			{
				"id": 73,
				"order": 11,
				"parent": 0,
				"title": "Blog",
				"url": "http://api.bhumiphotography.com/blog/blog/",
				"attr": "",
				"target": "",
				"classes": "",
				"xfn": "",
				"description": "",
				"object_id": 72,
				"object": "blog",
				"object_slug": "blog",
				"type": "post_type",
				"type_label": "Blog"
			},
			{
				"id": 76,
				"order": 12,
				"parent": 0,
				"title": "Contact",
				"url": "https://app.heyned.com/studio/client-invite/7sa9y83XRLnHpioKP",
				"attr": "",
				"target": "",
				"classes": "",
				"xfn": "",
				"description": "",
				"object_id": 76,
				"object": "custom",
				"object_slug": "contact",
				"type": "custom",
				"type_label": "Custom Link"
			}
		]
  }

  

  render() {
    return (
      <Router>
        <main className="main-layout">
          <aside className="left-sidebar">
            <Navigation items={this.state.items}/>
          </aside>

          <section className="site-content-container">
            <section className="site-content">
              <Switch>
                <Route exact path="/"  component={Home} />
                <Route path="/Gallery/:galleryName" component={Gallery} />
                <Route path="/Pricing" component={Pricing} />
                <Route path="/KindWords" component={KindWords} />
                <Route exact path="/Blog" component={Blog} />
                <Route path="/Blog/:singlePostId" component={SinglePost} />
                <Route path="/Contact" component={Contact} />
                <Route component={NoFound} />
              </Switch>
            </section>
          </section>
        </main>
      </Router>
    );
  }
}

export default App;
