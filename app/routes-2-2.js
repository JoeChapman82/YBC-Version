module.exports = function (app) {

  var styleguide        = require('./views/release2-2/content/styleguide'),
      aboutYou          = require('./views/release2-2/content/aboutYou'),
      yscMenu  = require('./views/release2-2/content/yscMenu');

  app.get('/release2-2/styleguide', function (req, res) {
    res.render('release2-2/styleguide', {
      answers : req.session['release2-2-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/release2-2/reset', function (req, res) {
      res.render('release2-2/reset');
  });

  app.post('/release2-2/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/release2-2/yscMenu');

  });



  /*******************
  summaryMain
  *******************/
  app.get('/release2-2/summaryMain', function (req, res) {
      res.render('release2-2/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  emailLogin
  *******************/
  app.get('/release2-2/emailLogin', function (req, res) {
      res.render('release2-2/emailLogin', {
        answers : req.session['release2-2-emailLogin'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  checkYourEmail
  *******************/
  app.get('/release2-2/checkYourEmail', function (req, res) {
      res.render('release2-2/checkYourEmail', {
        answers : req.session['release2-2-checkYourEmail'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  resumeApplication
  *******************/
  app.get('/release2-2/resumeApplication', function (req, res) {
      res.render('release2-2/resumeApplication', {
        answers : req.session['release2-2-resumeApplication'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/resumeApplication', function (req, res) {
    req.session['release2-2-resumeApplication'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#helper');
    } else {
      res.redirect('/release2-2/yscMenu');
    }
  });


  /*******************
  Helper
  *******************/
  app.get('/release2-2/helper', function (req, res) {
      res.render('release2-2/helper', {
        answers : req.session['release2-2-helper'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/helper', function (req, res) {
    req.session['release2-2-helper'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#helper');
    } else {
      res.redirect('/release2-2/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/release2-2/aboutYou', function (req, res) {
      res.render('release2-2/aboutYou', {
        answers : req.session['release2-2-aboutYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/aboutYou', function (req, res) {
    req.session['release2-2-aboutYou'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#aboutYou');
    } else {
      res.redirect('/release2-2/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/release2-2/contactDetails', function (req, res) {
      res.render('release2-2/contactDetails', {
        answers : req.session['release2-2-contactDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/contactDetails', function (req, res) {
    req.session['release2-2-contactDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#contactDetails');
    } else {
      res.redirect('/release2-2/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/release2-2/contactPref', function (req, res) {
      res.render('release2-2/contactPref', {
        answers : req.session['release2-2-contactPref'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/contactPref', function (req, res) {
    req.session['release2-2-contactPref'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#contactPref');
    } else {
      res.redirect('/release2-2/bankDetails');
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/release2-2/bankDetails', function (req, res) {
      res.render('release2-2/bankDetails', {
        answers : req.session['release2-2-bankDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/bankDetails', function (req, res) {
    req.session['release2-2-bankDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#aboutYou');
    } else {
      res.redirect('/release2-2/nationality');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/release2-2/currentWhereabouts', function (req, res) {
      res.render('release2-2/currentWhereabouts', {
        answers : req.session['release2-2-currentWhereabouts'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/currentWhereabouts', function (req, res) {
    req.session['release2-2-currentWhereabouts'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#currentWhereabouts');
    } else {
      res.redirect('/release2-2/paymentsFromAbroad');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/release2-2/nationality', function (req, res) {
    res.render('release2-2/nationality', {
      answers : req.session['release2-2-nationality'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/release2-2/nationality', function (req, res) {
    req.session['release2-2-nationality'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#nationality');
    } else {
      res.redirect('/release2-2/currentWhereabouts');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/release2-2/paymentsFromAbroad', function (req, res) {
      res.render('release2-2/paymentsFromAbroad', {
        answers : req.session['release2-2-paymentsFromAbroad'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/paymentsFromAbroad', function (req, res) {
    req.session['release2-2-paymentsFromAbroad'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#paymentsFromAbroad');
    } else {
      res.redirect('/release2-2/declaration');
    }
  });

  /*******************
  yourCondition
  *******************/
  app.get('/release2-2/yourCondition', function (req, res) {
      res.render('release2-2/yourCondition', {
        answers : req.session['release2-2-yourCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/yourCondition', function (req, res) {
    req.session['release2-2-yourCondition'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/healthcareprofessional');
    } else {
      res.redirect('/release2-2/healthcareprofessional');
    }
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/release2-2/conditionDetails', function (req, res) {
      res.render('release2-2/conditionDetails', {
        answers : req.session['release2-2-conditionDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/conditionDetails', function (req, res) {
    req.session['release2-2-conditionDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#conditionDetails');
    } else {
      res.redirect('/release2-2/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/release2-2/medications', function (req, res) {
      res.render('release2-2/medications', {
        answers : req.session['release2-2-medications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/medications', function (req, res) {
    req.session['release2-2-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/release2-2/manageMedications?edit=true');
       } else {
         res.redirect('/release2-2/manageMedications');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/release2-2/yscMenu#medications');
     } else {
       res.redirect('/release2-2/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/release2-2/manageMedications', function (req, res) {
      res.render('release2-2/manageMedications', {
        answers : req.session['release2-2-manageMedications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/manageMedications', function (req, res) {
    req.session['release2-2-manageMedications'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#manageMedications');
    } else {
      res.redirect('/release2-2/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/release2-2/treatments', function (req, res) {
      res.render('release2-2/treatments', {
        answers : req.session['release2-2-treatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/treatments', function (req, res) {
    req.session['release2-2-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/release2-2/manageTreatments?edit=true');
       } else {
         res.redirect('/release2-2/manageTreatments');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/release2-2/yscMenu#treatments');
     } else {
       res.redirect('/release2-2/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/release2-2/manageTreatments', function (req, res) {
      res.render('release2-2/manageTreatments', {
        answers : req.session['release2-2-manageTreatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/manageTreatments', function (req, res) {
    req.session['release2-2-manageTreatments'] = req.body;

  if (req.body.saveAndMenu) {
       res.redirect('/release2-2/yscMenu#manageTreatments');
     } else {
       res.redirect('/release2-2/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/release2-2/sideEffects', function (req, res) {
      res.render('release2-2/sideEffects', {
        answers : req.session['release2-2-sideEffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/sideEffects', function (req, res) {
    req.session['release2-2-sideEffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#sideEffects');
    } else {
      res.redirect('/release2-2/monitoringCondition');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/release2-2/conditionAffects', function (req, res) {
      res.render('release2-2/conditionAffects', {
        answers : req.session['release2-2-conditionAffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/conditionAffects', function (req, res) {
    req.session['release2-2-conditionAffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#conditionAffects');
    } else {
      res.redirect('/release2-2/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/release2-2/monitoringCondition', function (req, res) {
      res.render('release2-2/monitoringCondition', {
        answers : req.session['release2-2-monitoringCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/monitoringCondition', function (req, res) {
    req.session['release2-2-monitoringCondition'] = req.body;

    if(req.body.monitorCondition === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/release2-2/helpMonitoring?edit=true');
       } else {
         res.redirect('/release2-2/helpMonitoring');
       }
  }  else if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#monitoringCondition');
    } else {
      res.redirect('/release2-2/submitEvidence');
    }
  });

  /*******************
  helpMonitoring
  *******************/
  app.get('/release2-2/helpMonitoring', function (req, res) {
      res.render('release2-2/helpMonitoring', {
        answers : req.session['release2-2-helpMonitoring'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/helpMonitoring', function (req, res) {
    req.session['release2-2-helpMonitoring'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#monitoringCondition');
    } else {
      res.redirect('/release2-2/submitEvidence');
    }
  });


    /*******************
    submitEvidence
    *******************/
    app.get('/release2-2/submitEvidence', function (req, res) {
        res.render('release2-2/submitEvidence', {
          answers : req.session['release2-2-submitEvidence'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-2/submitEvidence', function (req, res) {
      req.session['release2-2-submitEvidence'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-2/yscMenu#submitEvidence');
      } else {
        res.redirect('/release2-2/youAndYourHome');
      }
    });

    /*******************
    youAndYourHome
    *******************/
    app.get('/release2-2/youAndYourHome', function (req, res) {
        res.render('release2-2/youAndYourHome', {
          answers : req.session['release2-2-youAndYourHome'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-2/youAndYourHome', function (req, res) {
      req.session['release2-2-youAndYourHome'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-2/yscMenu#submitEvidence');
      } else {
        res.redirect('/release2-2/specialAids');
      }
    });

    /*******************
    caringForYourself
    *******************/
    app.get('/release2-2/caringForYourself', function (req, res) {
        res.render('release2-2/caringForYourself', {
          answers : req.session['release2-2-caringForYourself'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-2/caringForYourself', function (req, res) {
      req.session['release2-2-caringForYourself'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-2/yscMenu#speech');
      } else {
        res.redirect('/release2-2/toilet');
      }
    });

    /*******************
    leavingYourHome
    *******************/
    app.get('/release2-2/leavingYourHome', function (req, res) {
        res.render('release2-2/leavingYourHome', {
          answers : req.session['release2-2-leavingYourHome'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-2/leavingYourHome', function (req, res) {
      req.session['release2-2-leavingYourHome'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-2/yscMenu#eatingAndDrinking');
      } else {
        res.redirect('/release2-2/gettingOut');
      }
    });

    /*******************
    makingSenseOfThings
    *******************/
    app.get('/release2-2/makingSenseOfThings', function (req, res) {
        res.render('release2-2/makingSenseOfThings', {
          answers : req.session['release2-2-makingSenseOfThings'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-2/makingSenseOfThings', function (req, res) {
      req.session['release2-2-makingSenseOfThings'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-2/yscMenu#mixing');
      } else {
        res.redirect('/release2-2/localJourney');
      }
    });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/release2-2/healthcareprofessional', function (req, res) {
      res.render('release2-2/healthcareprofessional', {
        answers : req.session['release2-2-healthcareprofessional'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/healthcareprofessional', function (req, res) {
    req.session['release2-2-healthcareprofessional'] = req.body;
console.log( req.body);
    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#healthcareprofessional');
    } else {
      res.redirect('/release2-2/conditionDetails');
    }
  });


  /*******************
  specialAids
  *******************/
  app.get('/release2-2/specialAids', function (req, res) {
      res.render('release2-2/specialAids', {
        answers : req.session['release2-2-specialAids'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/specialAids', function (req, res) {
    req.session['release2-2-specialAids'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#specialAids');
    } else {
      res.redirect('/release2-2/gettingUp');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/release2-2/sight', function (req, res) {
      res.render('release2-2/sight', {
        answers : req.session['release2-2-sight'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/sight', function (req, res) {
    req.session['release2-2-sight'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#sight');
    } else {
      res.redirect('/release2-2/hearing');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/release2-2/speech', function (req, res) {
      res.render('release2-2/speech', {
        answers : req.session['release2-2-speech'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/speech', function (req, res) {
    req.session['release2-2-speech'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#speech');
    } else {
      res.redirect('/release2-2/caringForYourself');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/release2-2/hearing', function (req, res) {
      res.render('release2-2/hearing', {
        answers : req.session['release2-2-hearing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/hearing', function (req, res) {
    req.session['release2-2-hearing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/speech');
    } else {
      res.redirect('/release2-2/speech');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/release2-2/gettingUp', function (req, res) {
      res.render('release2-2/gettingUp', {
        answers : req.session['release2-2-gettingUp'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/gettingUp', function (req, res) {
    req.session['release2-2-gettingUp'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#gettingUp');
    } else {
      res.redirect('/release2-2/sight');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/release2-2/toilet', function (req, res) {
      res.render('release2-2/toilet', {
        answers : req.session['release2-2-toilet'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/toilet', function (req, res) {
    req.session['release2-2-toilet'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#toilet');
    } else {
      res.redirect('/release2-2/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/release2-2/washing', function (req, res) {
      res.render('release2-2/washing', {
        answers : req.session['release2-2-washing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/washing', function (req, res) {
    req.session['release2-2-washing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#washing');
    } else {
      res.redirect('/release2-2/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/release2-2/gettingDressed', function (req, res) {
      res.render('release2-2/gettingDressed', {
        answers : req.session['release2-2-gettingDressed'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/gettingDressed', function (req, res) {
    req.session['release2-2-gettingDressed'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#gettingDressed');
    } else {
      res.redirect('/release2-2/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/release2-2/hotMeal', function (req, res) {
      res.render('release2-2/hotMeal', {
        answers : req.session['release2-2-hotMeal'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/hotMeal', function (req, res) {
    req.session['release2-2-hotMeal'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#hotMeal');
    } else {
      res.redirect('/release2-2/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/release2-2/eatingAndDrinking', function (req, res) {
      res.render('release2-2/eatingAndDrinking', {
        answers : req.session['release2-2-eatingAndDrinking'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/eatingAndDrinking', function (req, res) {
    req.session['release2-2-eatingAndDrinking'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/leavingYourHome');
    } else {
      res.redirect('/release2-2/leavingYourHome');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/release2-2/gettingOut', function (req, res) {
      res.render('release2-2/gettingOut', {
        answers : req.session['release2-2-gettingOut'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/gettingOut', function (req, res) {
    req.session['release2-2-gettingOut'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#gettingOut');
    } else {
      res.redirect('/release2-2/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/release2-2/mixing', function (req, res) {
      res.render('release2-2/mixing', {
        answers : req.session['release2-2-mixing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/mixing', function (req, res) {
    req.session['release2-2-mixing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/makingSenseOfThings');
    } else {
      res.redirect('/release2-2/makingSenseOfThings');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/release2-2/localJourney', function (req, res) {
      res.render('release2-2/localJourney', {
        answers : req.session['release2-2-localJourney'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/localJourney', function (req, res) {
    req.session['release2-2-localJourney'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#localJourney');
    } else {
      res.redirect('/release2-2/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/release2-2/somewhereNeverBeenBefore', function (req, res) {
      res.render('release2-2/somewhereNeverBeenBefore', {
        answers : req.session['release2-2-somewhereNeverBeenBefore'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/somewhereNeverBeenBefore', function (req, res) {
    req.session['release2-2-somewhereNeverBeenBefore'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#somewhereNeverBeenBefore');
    } else {
      res.redirect('/release2-2/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/release2-2/somewhereYouKnow', function (req, res) {
      res.render('release2-2/somewhereYouKnow', {
        answers : req.session['release2-2-somewhereYouKnow'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/somewhereYouKnow', function (req, res) {
    req.session['release2-2-somewhereYouKnow'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#somewhereYouKnow');
    } else {
      res.redirect('/release2-2/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/release2-2/understanding', function (req, res) {
      res.render('release2-2/understanding', {
        answers : req.session['release2-2-understanding'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/understanding', function (req, res) {
    req.session['release2-2-understanding'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#understanding');
    } else {
      res.redirect('/release2-2/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/release2-2/money', function (req, res) {
      res.render('release2-2/money', {
        answers : req.session['release2-2-money'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/money', function (req, res) {
    req.session['release2-2-money'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/additionalInfo');
    } else {
      res.redirect('/release2-2/additionalInfo');
    }
  });

  /*******************
  yscMenu
  *******************/
  app.get('/release2-2/yscMenu', function (req, res) {
      res.render('release2-2/yscMenu', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : yscMenu.getTableData(),
        helper                   : req.session['release2-2-helper'],
        aboutYou                 : req.session['release2-2-aboutYou'],
        contactDetails           : req.session['release2-2-contactDetails'],
        contactPref              : req.session['release2-2-contactPref'],
        currentWhereabouts       : req.session['release2-2-currentWhereabouts'],
        nationality              : req.session['release2-2-nationality'],
        paymentsFromAbroad       : req.session['release2-2-paymentsFromAbroad'],
        conditionDetails         : req.session['release2-2-conditionDetails'],
        medications              : req.session['release2-2-medications'],
        manageMedications        : req.session['release2-2-manageMedications'],
        treatments               : req.session['release2-2-treatments'],
        sideEffects              : req.session['release2-2-sideEffects'],
        conditionAffects         : req.session['release2-2-conditionAffects'],
        monitoringCondition      : req.session['release2-2-monitoringCondition'],
        healthcareprofessional   : req.session['release2-2-healthcareprofessional'],
        submitEvidence           : req.session['release2-2-submitEvidence'],
        specialAids              : req.session['release2-2-specialAids'],
        sight                    : req.session['release2-2-sight'],
        speech                   : req.session['release2-2-speech'],
        hearing                  : req.session['release2-2-hearing'],
        gettingUp                : req.session['release2-2-gettingUp'],
        toilet                   : req.session['release2-2-toilet'],
        washing                  : req.session['release2-2-washing'],
        gettingDressed           : req.session['release2-2-gettingDressed'],
        hotMeal                  : req.session['release2-2-hotMeal'],
        eatingAndDrinking        : req.session['release2-2-eatingAndDrinking'],
        gettingOut               : req.session['release2-2-gettingOut'],
        mixing                   : req.session['release2-2-mixing'],
        localJourney             : req.session['release2-2-localJourney'],
        somewhereNeverBeenBefore : req.session['release2-2-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['release2-2-somewhereYouKnow'],
        understanding            : req.session['release2-2-understanding'],
        money                    : req.session['release2-2-money']
      });
  });

  app.post('/release2-2/yscMenu', function (req, res) {
    req.session['release2-2-yscMenu'] = req.body;
    res.redirect('/release2-2/additionalInfo');
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/release2-2/additionalInfo', function (req, res) {
      res.render('release2-2/additionalInfo', {
        answers : req.session['release2-2-additionalInfo'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/additionalInfo', function (req, res) {
    req.session['release2-2-additionalInfo'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu');
    } else {
      res.redirect('/release2-2/checkYourAnswers');
    }
  });

  /*******************
  declaration
  *******************/
  app.get('/release2-2/declaration', function (req, res) {
      res.render('release2-2/declaration', {
        answers : req.session['release2-2-declaration'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/declaration', function (req, res) {
    req.session['release2-2-declaration'] = req.body;
    res.redirect('/release2-2/yourCondition');
  });

  /*******************
  thankYou
  *******************/
  app.get('/release2-2/thankYou', function (req, res) {
      res.render('release2-2/thankYou', {
        answers : req.session['release2-2-thankYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  validationPage
  *******************/
  app.get('/release2-2/validationPage', function (req, res) {
      res.render('release2-2/validationPage', {
        answers : req.session['release2-2-validationPage'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/validationPage', function (req, res) {
    req.session['release2-2-validationPage'] = req.body;
    res.redirect('/release2-2/yourCondition');
  });

  /*******************
  timeoutPage
  *******************/
  app.get('/release2-2/timeoutPage', function (req, res) {
      res.render('release2-2/timeoutPage', {
        answers : req.session['release2-2-timeoutPage'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/timeoutPage', function (req, res) {
    req.session['release2-2-timeoutPage'] = req.body;
    res.redirect('/release2-2/yscMenu');
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/release2-2/checkYourAnswers', function (req, res) {
      res.render('release2-2/checkYourAnswers', {
        answers : req.session['release2-2-checkYourAnswers'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/checkYourAnswers', function (req, res) {
    req.session['release2-2-checkYourAnswers'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#checkYourAnswers');
    } else {
      res.redirect('/release2-2/submitApplication');
    }
  });

  /*******************
  submitApplication
  *******************/
  app.get('/release2-2/submitApplication', function (req, res) {
      res.render('release2-2/submitApplication', {
        answers : req.session['release2-2-submitApplication'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/submitApplication', function (req, res) {
    req.session['release2-2-submitApplication'] = req.body;
    res.redirect('/release2-2/thankYou');
  });

  /*******************
  cookiesPage
  *******************/
  app.get('/release2-2/cookiesPage', function (req, res) {
      res.render('release2-2/cookiesPage', {
        answers : req.session['release2-2-cookiesPage'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/cookiesPage', function (req, res) {
    req.session['release2-2-cookiesPage'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu');
    } else {
      res.redirect('/release2-2/yscMenu');
    }
  });


  /*******************
  applicationSent
  *******************/
  app.get('/release2-2/applicationSent', function (req, res) {
      res.render('release2-2/applicationSent', {
        answers : req.session['release2-2-applicationSent'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/applicationSent', function (req, res) {
    req.session['release2-2-applicationSent'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu');
    } else {
      res.redirect('/release2-2/yscMenu');
    }
  });

  /*******************
  somethingGoneWrong
  *******************/
  app.get('/release2-2/somethingGoneWrong', function (req, res) {
      res.render('release2-2/somethingGoneWrong', {
        answers : req.session['release2-2-somethingGoneWrong'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/somethingGoneWrong', function (req, res) {
    req.session['release2-2-somethingGoneWrong'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu');
    } else {
      res.redirect('/release2-2/yscMenu');
    }
  });

  /*******************
  pageNotFound
  *******************/
  app.get('/release2-2/pageNotFound', function (req, res) {
      res.render('release2-2/pageNotFound', {
        answers : req.session['release2-2-pageNotFound'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/pageNotFound', function (req, res) {
    req.session['release2-2-pageNotFound'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu');
    } else {
      res.redirect('/release2-2/yscMenu');
    }
  });

  /*******************
  checkAnswersFull
  *******************/
  app.get('/release2-2/checkAnswersFull', function (req, res) {
      res.render('release2-2/checkAnswersFull', {
        answers : req.session['release2-2-checkAnswersFull'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/checkAnswersFull', function (req, res) {
    req.session['release2-2-checkAnswersFull'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu');
    } else {
      res.redirect('/release2-2/yscMenu');
    }
  });

  /*******************
  checkAnswersMinimal
  *******************/
  app.get('/release2-2/checkAnswersMinimal', function (req, res) {
      res.render('release2-2/checkAnswersMinimal', {
        answers : req.session['release2-2-checkAnswersMinimal'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-2/checkAnswersMinimal', function (req, res) {
    req.session['release2-2-checkAnswersMinimal'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu');
    } else {
      res.redirect('/release2-2/yscMenu');
    }
  });

  /*******************
  welcomePage
  *******************/
  app.get('/release2-2/welcomePage', function (req, res) {
    res.render('release2-2/welcomePage', {
      answers : req.session['release2-2-welcomePage'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/release2-2/welcomePage', function (req, res) {
    req.session['release2-2-welcomePage'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#welcomePage');
    } else {
      res.redirect('/release2-2/yscMenu');
    }
  });


  /*******************
  testPage
  *******************/
  app.get('/release2-2/testPage', function (req, res) {
    res.render('release2-2/testPage', {
      answers : req.session['release2-2-testPage'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/release2-2/testPage', function (req, res) {
    req.session['release2-2-testPage'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-2/yscMenu#nationality');
    } else {
      res.redirect('/release2-2/medications');
    }
  });


};
