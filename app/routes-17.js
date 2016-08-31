module.exports = function (app) {

  var styleguide        = require('./views/release2-1/content/styleguide'),
      aboutYou          = require('./views/release2-1/content/aboutYou'),
      yscMenu  = require('./views/release2-1/content/yscMenu');

  app.get('/release2-1/styleguide', function (req, res) {
    res.render('release2-1/styleguide', {
      answers : req.session['release2-1-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/release2-1/reset', function (req, res) {
      res.render('release2-1/reset');
  });

  app.post('/release2-1/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/release2-1/yscMenu');

  });



  /*******************
  summaryMain
  *******************/
  app.get('/release2-1/summaryMain', function (req, res) {
      res.render('release2-1/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  emailLogin
  *******************/
  app.get('/release2-1/emailLogin', function (req, res) {
      res.render('release2-1/emailLogin', {
        answers : req.session['release2-1-emailLogin'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  checkYourEmail
  *******************/
  app.get('/release2-1/checkYourEmail', function (req, res) {
      res.render('release2-1/checkYourEmail', {
        answers : req.session['release2-1-checkYourEmail'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  resumeApplication
  *******************/
  app.get('/release2-1/resumeApplication', function (req, res) {
      res.render('release2-1/resumeApplication', {
        answers : req.session['release2-1-resumeApplication'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/resumeApplication', function (req, res) {
    req.session['release2-1-resumeApplication'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#helper');
    } else {
      res.redirect('/release2-1/yscMenu');
    }
  });


  /*******************
  Helper
  *******************/
  app.get('/release2-1/helper', function (req, res) {
      res.render('release2-1/helper', {
        answers : req.session['release2-1-helper'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/helper', function (req, res) {
    req.session['release2-1-helper'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#helper');
    } else {
      res.redirect('/release2-1/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/release2-1/aboutYou', function (req, res) {
      res.render('release2-1/aboutYou', {
        answers : req.session['release2-1-aboutYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/aboutYou', function (req, res) {
    req.session['release2-1-aboutYou'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#aboutYou');
    } else {
      res.redirect('/release2-1/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/release2-1/contactDetails', function (req, res) {
      res.render('release2-1/contactDetails', {
        answers : req.session['release2-1-contactDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/contactDetails', function (req, res) {
    req.session['release2-1-contactDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#contactDetails');
    } else {
      res.redirect('/release2-1/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/release2-1/contactPref', function (req, res) {
      res.render('release2-1/contactPref', {
        answers : req.session['release2-1-contactPref'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/contactPref', function (req, res) {
    req.session['release2-1-contactPref'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#contactPref');
    } else {
      res.redirect('/release2-1/bankDetails');
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/release2-1/bankDetails', function (req, res) {
      res.render('release2-1/bankDetails', {
        answers : req.session['release2-1-bankDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/bankDetails', function (req, res) {
    req.session['release2-1-bankDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#aboutYou');
    } else {
      res.redirect('/release2-1/nationality');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/release2-1/currentWhereabouts', function (req, res) {
      res.render('release2-1/currentWhereabouts', {
        answers : req.session['release2-1-currentWhereabouts'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/currentWhereabouts', function (req, res) {
    req.session['release2-1-currentWhereabouts'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#currentWhereabouts');
    } else {
      res.redirect('/release2-1/paymentsFromAbroad');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/release2-1/nationality', function (req, res) {
    res.render('release2-1/nationality', {
      answers : req.session['release2-1-nationality'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/release2-1/nationality', function (req, res) {
    req.session['release2-1-nationality'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#nationality');
    } else {
      res.redirect('/release2-1/currentWhereabouts');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/release2-1/paymentsFromAbroad', function (req, res) {
      res.render('release2-1/paymentsFromAbroad', {
        answers : req.session['release2-1-paymentsFromAbroad'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/paymentsFromAbroad', function (req, res) {
    req.session['release2-1-paymentsFromAbroad'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#paymentsFromAbroad');
    } else {
      res.redirect('/release2-1/declaration');
    }
  });

  /*******************
  yourCondition
  *******************/
  app.get('/release2-1/yourCondition', function (req, res) {
      res.render('release2-1/yourCondition', {
        answers : req.session['release2-1-yourCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/yourCondition', function (req, res) {
    req.session['release2-1-yourCondition'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/healthcareprofessional');
    } else {
      res.redirect('/release2-1/healthcareprofessional');
    }
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/release2-1/conditionDetails', function (req, res) {
      res.render('release2-1/conditionDetails', {
        answers : req.session['release2-1-conditionDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/conditionDetails', function (req, res) {
    req.session['release2-1-conditionDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#conditionDetails');
    } else {
      res.redirect('/release2-1/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/release2-1/medications', function (req, res) {
      res.render('release2-1/medications', {
        answers : req.session['release2-1-medications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/medications', function (req, res) {
    req.session['release2-1-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/release2-1/manageMedications?edit=true');
       } else {
         res.redirect('/release2-1/manageMedications');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/release2-1/yscMenu#medications');
     } else {
       res.redirect('/release2-1/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/release2-1/manageMedications', function (req, res) {
      res.render('release2-1/manageMedications', {
        answers : req.session['release2-1-manageMedications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/manageMedications', function (req, res) {
    req.session['release2-1-manageMedications'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#manageMedications');
    } else {
      res.redirect('/release2-1/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/release2-1/treatments', function (req, res) {
      res.render('release2-1/treatments', {
        answers : req.session['release2-1-treatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/treatments', function (req, res) {
    req.session['release2-1-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/release2-1/manageTreatments?edit=true');
       } else {
         res.redirect('/release2-1/manageTreatments');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/release2-1/yscMenu#treatments');
     } else {
       res.redirect('/release2-1/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/release2-1/manageTreatments', function (req, res) {
      res.render('release2-1/manageTreatments', {
        answers : req.session['release2-1-manageTreatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/manageTreatments', function (req, res) {
    req.session['release2-1-manageTreatments'] = req.body;

  if (req.body.saveAndMenu) {
       res.redirect('/release2-1/yscMenu#manageTreatments');
     } else {
       res.redirect('/release2-1/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/release2-1/sideEffects', function (req, res) {
      res.render('release2-1/sideEffects', {
        answers : req.session['release2-1-sideEffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/sideEffects', function (req, res) {
    req.session['release2-1-sideEffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#sideEffects');
    } else {
      res.redirect('/release2-1/monitoringCondition');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/release2-1/conditionAffects', function (req, res) {
      res.render('release2-1/conditionAffects', {
        answers : req.session['release2-1-conditionAffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/conditionAffects', function (req, res) {
    req.session['release2-1-conditionAffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#conditionAffects');
    } else {
      res.redirect('/release2-1/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/release2-1/monitoringCondition', function (req, res) {
      res.render('release2-1/monitoringCondition', {
        answers : req.session['release2-1-monitoringCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/monitoringCondition', function (req, res) {
    req.session['release2-1-monitoringCondition'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#monitoringCondition');
    } else {
      res.redirect('/release2-1/helpMonitoring');
    }
  });

  /*******************
  helpMonitoring
  *******************/
  app.get('/release2-1/helpMonitoring', function (req, res) {
      res.render('release2-1/helpMonitoring', {
        answers : req.session['release2-1-helpMonitoring'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/helpMonitoring', function (req, res) {
    req.session['release2-1-helpMonitoring'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#monitoringCondition');
    } else {
      res.redirect('/release2-1/submitEvidence');
    }
  });


    /*******************
    submitEvidence
    *******************/
    app.get('/release2-1/submitEvidence', function (req, res) {
        res.render('release2-1/submitEvidence', {
          answers : req.session['release2-1-submitEvidence'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-1/submitEvidence', function (req, res) {
      req.session['release2-1-submitEvidence'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-1/yscMenu#submitEvidence');
      } else {
        res.redirect('/release2-1/youAndYourHome');
      }
    });

    /*******************
    youAndYourHome
    *******************/
    app.get('/release2-1/youAndYourHome', function (req, res) {
        res.render('release2-1/youAndYourHome', {
          answers : req.session['release2-1-youAndYourHome'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-1/youAndYourHome', function (req, res) {
      req.session['release2-1-youAndYourHome'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-1/yscMenu#submitEvidence');
      } else {
        res.redirect('/release2-1/specialAids');
      }
    });

    /*******************
    caringForYourself
    *******************/
    app.get('/release2-1/caringForYourself', function (req, res) {
        res.render('release2-1/caringForYourself', {
          answers : req.session['release2-1-caringForYourself'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-1/caringForYourself', function (req, res) {
      req.session['release2-1-caringForYourself'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-1/yscMenu#speech');
      } else {
        res.redirect('/release2-1/toilet');
      }
    });

    /*******************
    leavingYourHome
    *******************/
    app.get('/release2-1/leavingYourHome', function (req, res) {
        res.render('release2-1/leavingYourHome', {
          answers : req.session['release2-1-leavingYourHome'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-1/leavingYourHome', function (req, res) {
      req.session['release2-1-leavingYourHome'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-1/yscMenu#eatingAndDrinking');
      } else {
        res.redirect('/release2-1/gettingOut');
      }
    });

    /*******************
    makingSenseOfThings
    *******************/
    app.get('/release2-1/makingSenseOfThings', function (req, res) {
        res.render('release2-1/makingSenseOfThings', {
          answers : req.session['release2-1-makingSenseOfThings'],
          'edit'  : req.body.saveAndMenu,
          data    : aboutYou.getTableData()
        });
    });

    app.post('/release2-1/makingSenseOfThings', function (req, res) {
      req.session['release2-1-makingSenseOfThings'] = req.body;

      if (req.body.saveAndMenu) {
        res.redirect('/release2-1/yscMenu#mixing');
      } else {
        res.redirect('/release2-1/localJourney');
      }
    });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/release2-1/healthcareprofessional', function (req, res) {
      res.render('release2-1/healthcareprofessional', {
        answers : req.session['release2-1-healthcareprofessional'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/healthcareprofessional', function (req, res) {
    req.session['release2-1-healthcareprofessional'] = req.body;
console.log( req.body);
    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#healthcareprofessional');
    } else {
      res.redirect('/release2-1/conditionDetails');
    }
  });


  /*******************
  specialAids
  *******************/
  app.get('/release2-1/specialAids', function (req, res) {
      res.render('release2-1/specialAids', {
        answers : req.session['release2-1-specialAids'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/specialAids', function (req, res) {
    req.session['release2-1-specialAids'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#specialAids');
    } else {
      res.redirect('/release2-1/gettingUp');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/release2-1/sight', function (req, res) {
      res.render('release2-1/sight', {
        answers : req.session['release2-1-sight'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/sight', function (req, res) {
    req.session['release2-1-sight'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#sight');
    } else {
      res.redirect('/release2-1/hearing');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/release2-1/speech', function (req, res) {
      res.render('release2-1/speech', {
        answers : req.session['release2-1-speech'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/speech', function (req, res) {
    req.session['release2-1-speech'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#speech');
    } else {
      res.redirect('/release2-1/caringForYourself');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/release2-1/hearing', function (req, res) {
      res.render('release2-1/hearing', {
        answers : req.session['release2-1-hearing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/hearing', function (req, res) {
    req.session['release2-1-hearing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/speech');
    } else {
      res.redirect('/release2-1/speech');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/release2-1/gettingUp', function (req, res) {
      res.render('release2-1/gettingUp', {
        answers : req.session['release2-1-gettingUp'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/gettingUp', function (req, res) {
    req.session['release2-1-gettingUp'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#gettingUp');
    } else {
      res.redirect('/release2-1/sight');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/release2-1/toilet', function (req, res) {
      res.render('release2-1/toilet', {
        answers : req.session['release2-1-toilet'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/toilet', function (req, res) {
    req.session['release2-1-toilet'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#toilet');
    } else {
      res.redirect('/release2-1/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/release2-1/washing', function (req, res) {
      res.render('release2-1/washing', {
        answers : req.session['release2-1-washing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/washing', function (req, res) {
    req.session['release2-1-washing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#washing');
    } else {
      res.redirect('/release2-1/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/release2-1/gettingDressed', function (req, res) {
      res.render('release2-1/gettingDressed', {
        answers : req.session['release2-1-gettingDressed'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/gettingDressed', function (req, res) {
    req.session['release2-1-gettingDressed'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#gettingDressed');
    } else {
      res.redirect('/release2-1/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/release2-1/hotMeal', function (req, res) {
      res.render('release2-1/hotMeal', {
        answers : req.session['release2-1-hotMeal'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/hotMeal', function (req, res) {
    req.session['release2-1-hotMeal'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#hotMeal');
    } else {
      res.redirect('/release2-1/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/release2-1/eatingAndDrinking', function (req, res) {
      res.render('release2-1/eatingAndDrinking', {
        answers : req.session['release2-1-eatingAndDrinking'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/eatingAndDrinking', function (req, res) {
    req.session['release2-1-eatingAndDrinking'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/leavingYourHome');
    } else {
      res.redirect('/release2-1/leavingYourHome');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/release2-1/gettingOut', function (req, res) {
      res.render('release2-1/gettingOut', {
        answers : req.session['release2-1-gettingOut'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/gettingOut', function (req, res) {
    req.session['release2-1-gettingOut'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#gettingOut');
    } else {
      res.redirect('/release2-1/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/release2-1/mixing', function (req, res) {
      res.render('release2-1/mixing', {
        answers : req.session['release2-1-mixing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/mixing', function (req, res) {
    req.session['release2-1-mixing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/makingSenseOfThings');
    } else {
      res.redirect('/release2-1/makingSenseOfThings');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/release2-1/localJourney', function (req, res) {
      res.render('release2-1/localJourney', {
        answers : req.session['release2-1-localJourney'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/localJourney', function (req, res) {
    req.session['release2-1-localJourney'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#localJourney');
    } else {
      res.redirect('/release2-1/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/release2-1/somewhereNeverBeenBefore', function (req, res) {
      res.render('release2-1/somewhereNeverBeenBefore', {
        answers : req.session['release2-1-somewhereNeverBeenBefore'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/somewhereNeverBeenBefore', function (req, res) {
    req.session['release2-1-somewhereNeverBeenBefore'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#somewhereNeverBeenBefore');
    } else {
      res.redirect('/release2-1/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/release2-1/somewhereYouKnow', function (req, res) {
      res.render('release2-1/somewhereYouKnow', {
        answers : req.session['release2-1-somewhereYouKnow'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/somewhereYouKnow', function (req, res) {
    req.session['release2-1-somewhereYouKnow'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#somewhereYouKnow');
    } else {
      res.redirect('/release2-1/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/release2-1/understanding', function (req, res) {
      res.render('release2-1/understanding', {
        answers : req.session['release2-1-understanding'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/understanding', function (req, res) {
    req.session['release2-1-understanding'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#understanding');
    } else {
      res.redirect('/release2-1/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/release2-1/money', function (req, res) {
      res.render('release2-1/money', {
        answers : req.session['release2-1-money'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/money', function (req, res) {
    req.session['release2-1-money'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/additionalInfo');
    } else {
      res.redirect('/release2-1/additionalInfo');
    }
  });

  /*******************
  yscMenu
  *******************/
  app.get('/release2-1/yscMenu', function (req, res) {
      res.render('release2-1/yscMenu', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : yscMenu.getTableData(),
        helper                   : req.session['release2-1-helper'],
        aboutYou                 : req.session['release2-1-aboutYou'],
        contactDetails           : req.session['release2-1-contactDetails'],
        contactPref              : req.session['release2-1-contactPref'],
        currentWhereabouts       : req.session['release2-1-currentWhereabouts'],
        nationality              : req.session['release2-1-nationality'],
        paymentsFromAbroad       : req.session['release2-1-paymentsFromAbroad'],
        conditionDetails         : req.session['release2-1-conditionDetails'],
        medications              : req.session['release2-1-medications'],
        manageMedications        : req.session['release2-1-manageMedications'],
        treatments               : req.session['release2-1-treatments'],
        sideEffects              : req.session['release2-1-sideEffects'],
        conditionAffects         : req.session['release2-1-conditionAffects'],
        monitoringCondition      : req.session['release2-1-monitoringCondition'],
        healthcareprofessional   : req.session['release2-1-healthcareprofessional'],
        submitEvidence           : req.session['release2-1-submitEvidence'],
        specialAids              : req.session['release2-1-specialAids'],
        sight                    : req.session['release2-1-sight'],
        speech                   : req.session['release2-1-speech'],
        hearing                  : req.session['release2-1-hearing'],
        gettingUp                : req.session['release2-1-gettingUp'],
        toilet                   : req.session['release2-1-toilet'],
        washing                  : req.session['release2-1-washing'],
        gettingDressed           : req.session['release2-1-gettingDressed'],
        hotMeal                  : req.session['release2-1-hotMeal'],
        eatingAndDrinking        : req.session['release2-1-eatingAndDrinking'],
        gettingOut               : req.session['release2-1-gettingOut'],
        mixing                   : req.session['release2-1-mixing'],
        localJourney             : req.session['release2-1-localJourney'],
        somewhereNeverBeenBefore : req.session['release2-1-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['release2-1-somewhereYouKnow'],
        understanding            : req.session['release2-1-understanding'],
        money                    : req.session['release2-1-money']
      });
  });

  app.post('/release2-1/yscMenu', function (req, res) {
    req.session['release2-1-yscMenu'] = req.body;
    res.redirect('/release2-1/additionalInfo');
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/release2-1/additionalInfo', function (req, res) {
      res.render('release2-1/additionalInfo', {
        answers : req.session['release2-1-additionalInfo'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/additionalInfo', function (req, res) {
    req.session['release2-1-additionalInfo'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu');
    } else {
      res.redirect('/release2-1/checkYourAnswers');
    }
  });

  /*******************
  declaration
  *******************/
  app.get('/release2-1/declaration', function (req, res) {
      res.render('release2-1/declaration', {
        answers : req.session['release2-1-declaration'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/declaration', function (req, res) {
    req.session['release2-1-declaration'] = req.body;
    res.redirect('/release2-1/yourCondition');
  });

  /*******************
  thankYou
  *******************/
  app.get('/release2-1/thankYou', function (req, res) {
      res.render('release2-1/thankYou', {
        answers : req.session['release2-1-thankYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  validationPage
  *******************/
  app.get('/release2-1/validationPage', function (req, res) {
      res.render('release2-1/validationPage', {
        answers : req.session['release2-1-validationPage'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/validationPage', function (req, res) {
    req.session['release2-1-validationPage'] = req.body;
    res.redirect('/release2-1/yourCondition');
  });

  /*******************
  timeoutPage
  *******************/
  app.get('/release2-1/timeoutPage', function (req, res) {
      res.render('release2-1/timeoutPage', {
        answers : req.session['release2-1-timeoutPage'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/timeoutPage', function (req, res) {
    req.session['release2-1-timeoutPage'] = req.body;
    res.redirect('/release2-1/yscMenu');
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/release2-1/checkYourAnswers', function (req, res) {
      res.render('release2-1/checkYourAnswers', {
        answers : req.session['release2-1-checkYourAnswers'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/checkYourAnswers', function (req, res) {
    req.session['release2-1-checkYourAnswers'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu#checkYourAnswers');
    } else {
      res.redirect('/release2-1/submitApplication');
    }
  });

  /*******************
  submitApplication
  *******************/
  app.get('/release2-1/submitApplication', function (req, res) {
      res.render('release2-1/submitApplication', {
        answers : req.session['release2-1-submitApplication'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/submitApplication', function (req, res) {
    req.session['release2-1-submitApplication'] = req.body;
    res.redirect('/release2-1/thankYou');
  });

  /*******************
  cookiesPage
  *******************/
  app.get('/release2-1/cookiesPage', function (req, res) {
      res.render('release2-1/cookiesPage', {
        answers : req.session['release2-1-cookiesPage'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/release2-1/cookiesPage', function (req, res) {
    req.session['release2-1-cookiesPage'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/release2-1/yscMenu');
    } else {
      res.redirect('/release2-1/yscMenu');
    }
  });


};
