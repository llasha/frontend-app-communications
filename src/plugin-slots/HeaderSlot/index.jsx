import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';

import Header from '@edx/frontend-component-header';

const HeaderSlot = ({
  courseOrg, courseNumber, courseTitle,
}) => (
  <PluginSlot
    id="org.openedx.frontend.layout.header_communications.v1"
    idAliases={['header_slot']}
    slotOptions={{
      mergeProps: true,
    }}
    pluginProps={{
      courseOrg,
      courseNumber,
      courseTitle,
    }}
  >
    <Header
      className="learning-header"
      courseOrg={courseOrg}
      courseNumber={courseNumber}
      courseTitle={courseTitle}
    />
  </PluginSlot>
);

HeaderSlot.propTypes = {
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
};

HeaderSlot.defaultProps = {
  courseOrg: '',
  courseNumber: '',
  courseTitle: '',
};

export default HeaderSlot;
