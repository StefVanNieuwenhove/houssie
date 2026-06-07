import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import type { Link as LinkType } from '../../lib/types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type SubLinkProps = {
  onClose: () => void;
};

const SubLink = ({
  icon,
  name,
  subLinks,
  href,
  onClose,
}: LinkType & SubLinkProps) => {
  const [isActive, setIsActive] = useState(false);

  const hasSubLinks = subLinks && subLinks.length > 0;
  const isSimpleLink = !hasSubLinks && href;

  return (
    <List>
      {isSimpleLink && (
        <ListItemButton
          component={Link}
          to={href}
          onClick={onClose}
          sx={{ py: 0 }}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      )}
      {hasSubLinks && (
        <>
          <ListItemButton onClick={() => setIsActive(!isActive)} sx={{ py: 0 }}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
            {isActive ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isActive} timeout='auto' unmountOnExit>
            {subLinks.map((subLink) => (
              <ListItemButton
                key={subLink.name}
                component={Link}
                to={subLink.href}
                sx={{ pl: 4 }}
                onClick={() => {
                  setIsActive(false);
                  onClose();
                }}>
                <ListItemIcon>{subLink.icon}</ListItemIcon>
                <ListItemText primary={subLink.name} />
              </ListItemButton>
            ))}
          </Collapse>
        </>
      )}
    </List>
  );
};

export default SubLink;
