'use strict';
module.exports = (sequelize, DataTypes) => {
  var FCS = sequelize.define('FCS', 
    {
      No:{ 
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Time:{ type:DataTypes.STRING},
      OBCLoggingTime:{ type:DataTypes.DATE},
      TaskNumber:{ type:DataTypes.STRING},
      LogTypeID:{ type:DataTypes.STRING},
      Size:{ type:DataTypes.INTEGER},
      OBCTime:{ type:DataTypes.DATE},
      FCSOPMode:{ type:DataTypes.STRING},
      ADMethod:{ type:DataTypes.STRING},
      ACMethod:{ type:DataTypes.STRING},
      ODMethod:{ type:DataTypes.STRING},
      OrbitSource:{ type:DataTypes.STRING},
      Frequency:{ type:DataTypes.STRING},
      AC_q_cmd_No0:{ type:DataTypes.FLOAT},
      AC_q_cmd_No1:{ type:DataTypes.FLOAT},
      AC_q_cmd_No2:{ type:DataTypes.FLOAT},
      AC_q_cmd_No3:{ type:DataTypes.FLOAT},
      AC_w_cmd_No0:{ type:DataTypes.FLOAT},
      AC_w_cmd_No1:{ type:DataTypes.FLOAT},
      AC_w_cmd_No2:{ type:DataTypes.FLOAT},
      AC_t_cmd_No0:{ type:DataTypes.FLOAT},
      AC_t_cmd_No1:{ type:DataTypes.FLOAT},
      AC_t_cmd_No2:{ type:DataTypes.FLOAT},
      ADOD_q_est_No0:{ type:DataTypes.FLOAT},
      ADOD_q_est_No1:{ type:DataTypes.FLOAT},
      ADOD_q_est_No2:{ type:DataTypes.FLOAT},
      ADOD_q_est_No3:{ type:DataTypes.FLOAT},
      ADOD_w_est_No0:{ type:DataTypes.FLOAT},
      ADOD_w_est_No1:{ type:DataTypes.FLOAT},
      ADOD_w_est_No2:{ type:DataTypes.FLOAT},
      ADOD_pos_est_No0:{ type:DataTypes.FLOAT},
      ADOD_pos_est_No1:{ type:DataTypes.FLOAT},
      ADOD_pos_est_No2:{ type:DataTypes.FLOAT},
      ADOD_vel_est_No0:{ type:DataTypes.FLOAT},
      ADOD_vel_est_No1:{ type:DataTypes.FLOAT},
      ADOD_vel_est_No2:{ type:DataTypes.FLOAT},
      GPS_GPSTime:{ type:DataTypes.STRING},
      GPS_3DFix:{ type:DataTypes.STRING},
      GPS_GPSNoTrack:{ type:DataTypes.STRING},
      GPS_GDOP:{ type:DataTypes.STRING},
      GPS_GPSPosition_No0:{ type:DataTypes.STRING},
      GPS_GPSPosition_No1:{ type:DataTypes.STRING},
      GPS_GPSPosition_No2:{ type:DataTypes.STRING},
      GPS_GPSVelocity_No0:{ type:DataTypes.STRING},
      GPS_GPSVelocity_No1:{ type:DataTypes.STRING},
      GPS_GPSVelocity_No2:{ type:DataTypes.STRING},
      GPS_TimeOffset:{ type:DataTypes.STRING},
      GPS_TimeDrift:{ type:DataTypes.STRING},
      GPS_RMSResidual:{ type:DataTypes.STRING},
      GPS_GPS_SVNo:{ type:DataTypes.STRING},
      GPS_SigleErrorCnt:{ type:DataTypes.STRING},
      GPS_GPSReceiverStatus:{ type:DataTypes.STRING},
      GPS_GPSAppStatus1:{ type:DataTypes.STRING},
      GPS_GPSAppStatus2:{ type:DataTypes.STRING},
      GPS_GPSAppStatus3:{ type:DataTypes.STRING},
      GPS_ReservedData:{ type:DataTypes.STRING},
      GPS_Dummy:{ type:DataTypes.STRING},
      RW_Speed_No0:{ type:DataTypes.FLOAT},
      RW_Speed_No1:{ type:DataTypes.FLOAT},
      RW_Speed_No2:{ type:DataTypes.FLOAT},
      RW_Speed_No3:{ type:DataTypes.FLOAT},
      RW_cmd_No0:{ type:DataTypes.FLOAT},
      RW_cmd_No1:{ type:DataTypes.FLOAT},
      RW_cmd_No2:{ type:DataTypes.FLOAT},
      RW_cmd_No3:{ type:DataTypes.FLOAT},
      RW_tq_reply_No0:{ type:DataTypes.FLOAT},
      RW_tq_reply_No1:{ type:DataTypes.FLOAT},
      RW_tq_reply_No2:{ type:DataTypes.FLOAT},
      RW_tq_reply_No3:{ type:DataTypes.FLOAT}
    },
    {
        tableName: 'FCS',
        timestamps: false,
        freezeTableName: true
    });
  return FCS;
};