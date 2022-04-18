<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
Use App\Models\Materia;
class DocenteMateria extends Model
{
    use HasFactory;
    
    public function User(){
        return $this->belogsTo(User::class);
    }

    public function Materia(){
        return $this->belogsTo(Materia::class);
    }
}
