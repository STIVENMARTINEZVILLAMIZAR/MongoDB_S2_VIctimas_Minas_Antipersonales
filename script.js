
use VictimasMinasAntipersonales

db.createCollection("DataVictimas")

mongoimport --uri "mongodb+srv://stivenmartinezvillamizar:149600225j123.K*@cluster0.zsyjrwr.mongodb.net/VictimasMinasAntipersonales" --collection DataVictimas --type csv --headerline --file "C:\Users\cjavi\OneDrive\Documentos/SituacionVictimas"


/*departamento*/
db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$departamento",
      codigodanedepartamento: { $first: "$codigodanedepartamento" },
      tipoarea: { $first: "$tipoarea" }
    }
  },
  {
    $project: {
      _id: 0,
      departamento: "$_id",
      codigodanedepartamento: 1,
      tipoarea: 1,
      
    }
  },
  {
    $merge: {
      into: "DEPARTAMENTO",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])

/*Municipio*/
db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$municipio",
      codigodanemunicipio: { $first: "$codigodanedmuncipio" },
      tipoarea: { $first: "$tipoarea" }
    }
  },
  {
    $project: {
      _id: 0,
      municipio: "$_id",
      codigodanemunicipio: 1,
      tipoarea: 1,
      
    }
  },
  {
    $merge: {
      into: "MUNICIPIO",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])

/*Estado*/


db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$estado",
      estado: { $first: "$estado" },
     
    }
  },
  {
    $project: {
      _id: 0,
      estado: "$_id",
      estado: 1,
      
      
    }
  },
  {
    $merge: {
      into: "ESTADO",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])

/*renombrar coleccion*/
db.ESTADO.renameCollection("GENERO")
db.GENERO.renameCollection("ESTADO")

/*genero*/


db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$genero",
      genero: { $first: "$genero" },
      
    }
  },
  {
    $project: {
      _id: 0,
      genero: "$_id",
      estado: 1,
    
    }
  },
  {
    $merge: {
      into: "GENERO",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])


/*GRUPOETCNICO*/


db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$grupoetnicoo",
      grupoetnico: { $first: "$grupoetnico" },
      
    }
  },
  {
    $project: {
      _id: 0,
      grupoetnico: "$_id",
      grupoetnico: 1,
    
    }
  },
  {
    $merge: {
      into: "GRUPOETNICO",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])




/*RANGOEDAD*/


db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$rangoedad",
      rangoedad: { $first: "$rangoedad" },
      
    }
  },
  {
    $project: {
      _id: 0,
      rangoedad: "$_id",
      rangoedad: 1,
    
    }
  },
  {
    $merge: {
      into: "RANGOEDAD",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])


/*SITIO*/


db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$sitio",
      sitio: { $first: "$sitio" },
      
    }
  },
  {
    $project: {
      _id: 0,
      sitio: "$_id",
      sitio: 1,
    
    }
  },
  {
    $merge: {
      into: "SITIO",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])



/*AREA*/


db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$tipoarea",
      tipoarea: { $first: "$tipoarea" },
      
    }
  },
  {
    $project: {
      _id: 0,
      tipoarea: "$_id",
      tipoarea: 1,
    
    }
  },
  {
    $merge: {
      into: "AREA",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])


/*CONDICION*/


db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$condicion",
      condicion: { $first: "$condicion" },
      
    }
  },
  {
    $project: {
      _id: 0,
      condicion: "$_id",
      condicion: 1,
    
    }
  },
  {
    $merge: {
      into: "CONDICION",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])



/*EVENTO*/


db.DataVictimas.aggregate([
  {
    $group: {
      _id: "$tipoevento",
      tipoevento: { $first: "$tipoevento" },
      latitudcabecera:  { $first: "$latitudcabecera" },
      longitudcabecera: { $first: "$longitudcabecera" },
       Ubicación:  { $first: "$Ubicación" },
       Actividad:  { $first: "$Actividad" },
    }
  },
  {
    $project: {
      _id: 0,
      tipoevento: "$_id",
      tipoevento: 1,
      latitudcabecera: 1,
      longitudcabecera:1,
      Ubicación:1,
      Actividad: 1,
    
    }
  },
  {
    $merge: {
      into: "EVENTO",
      whenMatched: "replace",
      whenNotMatched: "insert"
    }
  }
])



{
  _id: ObjectId('68e0d4adc39e91667a129fb6'),
  departamento: 'ANTIOQUIA',
  codigodanedepartamento: 5,
  municipio: 'VALDIVIA',
  codigodanemunicipio: '5,854',
  tipoarea: 'Rural',
  sitio: 'Sin información',
  ano: '2,008',
  mes: 3,
  rangoedad: 'Mayor de 18 años',
  grupoetnico: 'no',
  condicion: 'Civil',
  estado: 'Hombre',
  genero: 'Herido',
  latitudcabecera: 7.165222,
  longitudcabecera: -75.438081,
  tipoevento: 'Sin informacion',
  'Ubicación': '(7.165222, -75.438081)',
  Actividad: 'Erradicador manual - PCI'
}

db.MUNICIPIO.updateOne(

  { $set: { codigodanedepartamento: "5,854" } }
)