import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Drawer, Grid, Typography, Button, Hidden } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
}));

const TableEditBar = props => {
  const {
    selected,
    className,
    onMarkPaid,
    onMarkUnpaid,
    onDelete,
    ...rest
  } = props;

  const classes = useStyles();
  const open = selected.length > 0;

  return (
    <Drawer
      anchor="bottom"
      open={open}
      // eslint-disable-next-line react/jsx-sort-props
      PaperProps={{ elevation: 1 }}
      variant="persistent">
      <div {...rest} className={clsx(classes.root, className)}>
        <Grid alignItems="center" container spacing={2}>
          <Hidden smDown>
            <Grid item md={3}>
              <Typography color="textSecondary" variant="subtitle1">
                {selected.length} selected
              </Typography>
            </Grid>
          </Hidden>
          <Grid item md={6} xs={12}>
            <div className={classes.actions}>
              <Button onClick={onDelete}>
                <RemoveIcon className={classes.buttonIcon} />
                Remove
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
};

TableEditBar.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
  onMarkUnpaid: PropTypes.func,
  selected: PropTypes.array.isRequired,
};

export default TableEditBar;
