import React, { PureComponent } from 'react';

import { Button } from '@iadvize/ibbu-front-library';

class SomeComponent extends PureComponent {
    static something = () => this.name
    render() {
      return () => <Button>ClickMe</Button>;
    }
}

export default SomeComponent;

