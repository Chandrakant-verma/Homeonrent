const registeredHome = [];

const host_home = (req, res, next)=>{

    // res.sendFile(path.join(rootDir, 'views', 'host_home.html'));
    res.render('host_home', { registeredHome: registeredHome  });
}

const host_add_home_get = (req, res, next)=>{

    // res.sendFile( path.join(rootDir, 'views', 'host_add_home_get.html') );
    res.render('host_add_home_get');
}

const host_add_home_post =(req, res, next)=>{

    registeredHome.push(req.body);
    // res.sendFile( path.join(rootDir, 'views', 'host_add_home_post.html') );
    res.render('host_add_home_post');
}

module.exports = { host_home: host_home, host_add_home_get: host_add_home_get, host_add_home_post: host_add_home_post, registeredHome: registeredHome};