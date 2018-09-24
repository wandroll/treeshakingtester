import React, { PureComponent } from 'react';

import { LinkButton } from '@iadvize/ibbu-front-library';

class SomeComponent extends PureComponent {
    static something = () => this.name
    render() {
      return () => <LinkButton>ClickMe</LinkButton>;
    }
}

export default SomeComponent;

