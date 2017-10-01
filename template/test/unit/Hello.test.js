import { shallow } from 'avoriaz'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { createRenderer } from 'vue-server-renderer'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const renderer = createRenderer(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const wrapper = shallow(Hello){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw err{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      expect(str).toMatchSnapshot(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
